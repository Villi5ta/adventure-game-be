import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Score", scoreSchema);
