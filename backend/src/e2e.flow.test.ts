import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createApp } from "./app.js";

describe("e2e core data flow", () => {
  it("creates and reads core operational records", async () => {
    const app = createApp();
    const server = app.listen(0);
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("No test server port");
    const base = `http://127.0.0.1:${address.port}/api`;

    const email = `e2e_${Date.now()}@example.com`;
    const password = "E2ePass123!";

    const regRes = await fetch(`${base}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "e2e-user",
        email,
        password,
        role: "ADMIN"
      })
    });
    assert.equal(regRes.status, 201);
    const regBody = (await regRes.json()) as { accessToken: string };
    const token = regBody.accessToken;
    assert.ok(token);

    const authHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };

    const siteRes = await fetch(`${base}/sites`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ name: `E2E Site ${Date.now()}` })
    });
    assert.equal(siteRes.status, 201);
    const siteBody = (await siteRes.json()) as { data: { id: string } };
    const siteId = siteBody.data.id;
    assert.ok(siteId);

    const drillRes = await fetch(`${base}/drilling-entries`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        siteId,
        date: "2026-05-31",
        meters: 111.5,
        boreholeNumber: "BH-E2E"
      })
    });
    assert.equal(drillRes.status, 201);

    const catRes = await fetch(`${base}/categories`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ name: `Cat ${Date.now()}` })
    });
    assert.equal(catRes.status, 201);
    const catBody = (await catRes.json()) as { data: { id: string } };
    const categoryId = catBody.data.id;

    const headRes = await fetch(`${base}/expense-heads`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        categoryId,
        name: `Head ${Date.now()}`
      })
    });
    assert.equal(headRes.status, 201);
    const headBody = (await headRes.json()) as { data: { id: string } };
    const expenseHeadId = headBody.data.id;

    const opexRes = await fetch(`${base}/opex-entries`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        siteId,
        categoryId,
        expenseHeadId,
        amount: 5000,
        date: "2026-05-31",
        remarks: "e2e opex"
      })
    });
    assert.equal(opexRes.status, 201);

    const dceRes = await fetch(`${base}/dce-entries`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        siteId,
        costHead: "Rig Depreciation",
        perDayCost: 2500,
        startDate: "2026-05-31",
        status: "ACTIVE",
        remarks: "e2e dce"
      })
    });
    assert.equal(dceRes.status, 201);

    const advRes = await fetch(`${base}/advance-entries`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({
        siteId,
        date: "2026-05-31",
        amount: 10000,
        remarks: "e2e advance"
      })
    });
    assert.equal(advRes.status, 201);

    const [sitesList, drillList, opexList, dceList, advList] = await Promise.all([
      fetch(`${base}/sites`, { headers: { Authorization: `Bearer ${token}` } }),
      fetch(`${base}/drilling-entries`, { headers: { Authorization: `Bearer ${token}` } }),
      fetch(`${base}/opex-entries`, { headers: { Authorization: `Bearer ${token}` } }),
      fetch(`${base}/dce-entries`, { headers: { Authorization: `Bearer ${token}` } }),
      fetch(`${base}/advance-entries`, { headers: { Authorization: `Bearer ${token}` } })
    ]);

    assert.equal(sitesList.status, 200);
    assert.equal(drillList.status, 200);
    assert.equal(opexList.status, 200);
    assert.equal(dceList.status, 200);
    assert.equal(advList.status, 200);

    const sitesData = (await sitesList.json()) as { data: Array<{ id: string }> };
    const drillingData = (await drillList.json()) as { data: Array<{ siteId: string }> };
    const opexData = (await opexList.json()) as { data: Array<{ siteId: string }> };
    const dceData = (await dceList.json()) as { data: Array<{ siteId: string }> };
    const advanceData = (await advList.json()) as { data: Array<{ siteId: string }> };

    assert.ok(sitesData.data.some((s) => s.id === siteId));
    assert.ok(drillingData.data.some((d) => d.siteId === siteId));
    assert.ok(opexData.data.some((o) => o.siteId === siteId));
    assert.ok(dceData.data.some((d) => d.siteId === siteId));
    assert.ok(advanceData.data.some((a) => a.siteId === siteId));

    server.close();
  });
});
