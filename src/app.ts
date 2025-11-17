import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

import authRoutes from "./routes/auth.route"

app.get("/", (req, res) => {
    res.json({
        message: "Backend is running successfully!"
    });
});


app.use("/api/v1", authRoutes);


export { app };