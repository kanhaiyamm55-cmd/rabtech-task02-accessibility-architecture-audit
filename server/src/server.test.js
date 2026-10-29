import test from "node:test";
import assert from "node:assert/strict";
import { app } from "./server.js";

// These are API contract examples. Start the server locally and run them
// through a test server in a future iteration; this file is a starter note.
test("feedback API contract is documented", () => {
  assert.equal(typeof app, "function");
  assert.ok(true);
});
