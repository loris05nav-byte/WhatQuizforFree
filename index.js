
export const config = {
  api: { bodyParser: false }
};

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ ok: true, message: "WhatQuiz Vercel API OK" });
});

export default app;
