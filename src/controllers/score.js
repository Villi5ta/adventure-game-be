import { v4 as uuidv4 } from "uuid";
import ScoreModel from "../models/score.js";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export const ADD_GAME_SCORE = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.user_id;

    if (!decodedToken.user_name | (decodedToken.user_name === undefined)) {
      decodedToken.user_name = "Anonymous";
    }

    const score = new ScoreModel({
      id: uuidv4(),
      userName: decodedToken.user_name,
      ...req.body,
    });

    const response = await score.save();

    console.log(response);

    const user = await UserModel.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userResponse = { ...response.toObject() };
    delete userResponse.userName;

    user.scores.push(userResponse);

    await user.save();

    return res.status(200).json({
      message: "New score has been added and pushed to the user",
      score: response,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message });
  }
};

export const GET_GAME_SCORES = async (req, res) => {
  try {
    const score = ScoreModel.find();

    const response = await score;

    return res
      .status(200)
      .json({ message: "All game scores", scores: response });
  } catch (err) {
    console.log(err);
  }
};
