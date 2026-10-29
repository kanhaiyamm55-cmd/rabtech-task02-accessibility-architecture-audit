import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT || 3000);
const here = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(here, "../../client");

app.use(express.json({ limit: "10kb" }));
app.use(express.static(clientDir));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/feedback", (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message) {
    return res.status(400).json({ error: "Feedback message is required." });
  }
  if (message.length > 500) {
    return res.status(400).json({ error: "Feedback must be 500 characters or fewer." });
  }
  // Deliberately no persistence: this is a learning demo.
  return res.status(201).json({ message: "Thanks — your demo feedback was received." });
});

app.listen(port, () => {
  console.log(`Audit starter running at http://localhost:${port}`);
});

export { app };
