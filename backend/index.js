import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.use("/api/auth", authRoutes);

app.listen(3000, (err, res) => {
  connectDB();
  console.log("Server listening on 3000");
});
