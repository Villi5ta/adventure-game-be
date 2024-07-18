import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import scoreRoutes from "./src/routes/score.js";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log(`DB connection with established!`))
  .catch((err) => console.log("Error ocurred", err));

app.use(scoreRoutes);

app.use((req, res) => {
  return res.status(404).json({ message: "Endpoint not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`App started on port ${process.env.PORT}`);
});
