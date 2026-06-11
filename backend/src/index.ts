import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { z } from "zod";
import connectDB from "./config/db.config.js";
dotenv.config();

const app = express();

await connectDB();

app.get("/", (req: Request, res: Response) => {
    res.json({ name: "aman" });
});

app.post("/api/v1/signup", (req: Request, res: Response) => {
    res.status(201).json({ message: "signup route" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`connected to PORT: ${port}`);
});