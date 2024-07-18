import { v4 as uuidv4 } from "uuid";
import scoreModel from "../models/score.js";

export const ADD_GAME_SCORE = async (req, res) => {
  try {
    const score = new scoreModel({
      id: uuidv4(),
      ...req.body,
    });

    const response = await score.save();

    return res
      .status(200)
      .json({ message: "New high score has been added", score: response });
  } catch (err) {
    console.log(err);
  }
};

export const GET_GAME_SCORES = async (req, res) => {
  try {
    const score = scoreModel.find({});

    const response = await score;

    return res
      .status(200)
      .json({ message: "All game scores", scores: response });
  } catch (err) {
    console.log(err);
  }
};
