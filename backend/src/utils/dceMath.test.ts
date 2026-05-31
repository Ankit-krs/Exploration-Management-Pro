import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { daysDiff } from "./dceMath.js";

describe("dceMath.daysDiff", () => {
  it("returns 0 for reverse date range", () => {
    assert.equal(daysDiff("2026-06-02", "2026-06-01"), 0);
  });

  it("returns 1 for next-day span", () => {
    assert.equal(daysDiff("2026-06-01", "2026-06-02"), 1);
  });

  it("returns integer day distance", () => {
    assert.equal(daysDiff("2026-06-01", "2026-06-11"), 10);
  });
});
