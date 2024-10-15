import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./db/connectDB.js";

// Load environment variables from .env file
dotenv.config();

// Create an Express application instance
const app = express();
// Set the port number for the server to listen on (use environment variable or default to 5000)
const PORT = process.env.PORT || 5000;

// Use Express's built-in JSON middleware to parse incoming JSON requests
app.use(express.json());

// Mount the authentication routes under the /api/auth path
app.use("/api/auth", authRoutes);

// Start the Express server and listen on the specified port
app.listen(PORT, (err, res) => {
  // Connect to the database (assuming connectDB is a function)
  connectDB();
  // Log a message to the console indicating that the server is listening
  console.log(`Server listening on ${PORT}`);
});
