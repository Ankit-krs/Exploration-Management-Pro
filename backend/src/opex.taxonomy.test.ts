import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createApp } from "./app.js";
import { prisma } from "./config/prisma.js";
import { MASTER_OPEX_TAXONOMY, opexTaxonomyService } from "./services/opexTaxonomyService.js";

const makeAuth = async (base: string) => {
  const email = `opex_tax_${Date.now()}_${Math.floor(Math.random() * 1000)}@example.com`;
  const password = "TaxonomyPass123!";
  const response = await fetch(`${base}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `opex-tax-${Date.now()}`,
      email,
      password,
      role: "ADMIN"
    })
  });
  assert.equal(response.status, 201);
  const body = (await response.json()) as { accessToken: string };
  return body.accessToken;
};

describe("opex taxonomy", () => {
  it("seeds master taxonomy idempotently and keeps deterministic ordering", async () => {
    await opexTaxonomyService.ensureMasterTaxonomy();
    await opexTaxonomyService.ensureMasterTaxonomy();

    const categories = await prisma.category.findMany();
    for (const masterCategory of MASTER_OPEX_TAXONOMY) {
      const matched = categories.find((c) => c.name.trim().toLowerCase() === masterCategory.name.trim().toLowerCase());
      assert.ok(matched, `missing category ${masterCategory.name}`);
      assert.equal(matched.sortOrder, masterCategory.sortOrder);
    }

    const app = createApp();
    const server = app.listen(0);
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("No test server port");
    const base = `http://127.0.0.1:${address.port}/api`;
    const token = await makeAuth(base);

    const catRes = await fetch(`${base}/categories`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    assert.equal(catRes.status, 200);
    const catBody = (await catRes.json()) as { data: Array<{ name: string; sortOrder?: number | null }> };
    assert.equal(catBody.data[0]?.name, "Administration");
    assert.equal(catBody.data[0]?.sortOrder, 1);
    assert.equal(catBody.data[1]?.name, "Any other");

    const headsRes = await fetch(`${base}/expense-heads`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    assert.equal(headsRes.status, 200);
    const headBody = (await headsRes.json()) as { data: Array<{ categoryId: string; name: string; sortOrder?: number | null }> };
    const adminCategory = catBody.data.find((c) => c.name === "Administration");
    assert.ok(adminCategory);
    const adminHeads = headBody.data.filter((h) => h.categoryId === categories.find((c) => c.name === "Administration")?.id);
    assert.equal(adminHeads[0]?.name, "Internet/mobile");
    assert.equal(adminHeads[0]?.sortOrder, 1);

    server.close();
  });

  it("rejects opex create when expense head does not belong to category", async () => {
    await opexTaxonomyService.ensureMasterTaxonomy();

    const app = createApp();
    const server = app.listen(0);
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("No test server port");
    const base = `http://127.0.0.1:${address.port}/api`;
    const token = await makeAuth(base);
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    };

    const siteRes = await fetch(`${base}/sites`, {
      method: "POST",
      headers,
      body: JSON.stringify({ name: `Taxonomy Site ${Date.now()}` })
    });
    assert.equal(siteRes.status, 201);
    const siteBody = (await siteRes.json()) as { data: { id: string } };

    const catRes = await fetch(`${base}/categories`, { headers: { Authorization: `Bearer ${token}` } });
    const catBody = (await catRes.json()) as { data: Array<{ id: string; name: string }> };
    const admin = catBody.data.find((c) => c.name === "Administration");
    const travel = catBody.data.find((c) => c.name === "Travel");
    assert.ok(admin && travel);

    const headsRes = await fetch(`${base}/expense-heads`, { headers: { Authorization: `Bearer ${token}` } });
    const headsBody = (await headsRes.json()) as { data: Array<{ id: string; categoryId: string; name: string }> };
    const travelHead = headsBody.data.find((h) => h.categoryId === travel.id);
    assert.ok(travelHead);

    const invalidOpex = await fetch(`${base}/opex-entries`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        siteId: siteBody.data.id,
        categoryId: admin.id,
        expenseHeadId: travelHead.id,
        amount: 500,
        date: "2026-05-31",
        remarks: "invalid mapping"
      })
    });

    assert.equal(invalidOpex.status, 400);
    const invalidBody = (await invalidOpex.json()) as { message?: string };
    assert.match(invalidBody.message || "", /does not belong/i);

    server.close();
  });
});

