import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createApp } from "./app.js";

describe("app", () => {
  it("serves /api/health", async () => {
    const app = createApp();
    const server = app.listen(0);
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("No test server port");
    const res = await fetch(`http://127.0.0.1:${address.port}/api/health`);
    const body = (await res.json()) as { status?: string };
    server.close();
    assert.equal(res.status, 200);
    assert.equal(body.status, "ok");
  });
});
