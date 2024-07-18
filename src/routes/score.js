import express from "express";
import { ADD_GAME_SCORE, GET_GAME_SCORES } from "../controllers/score.js";

const router = express.Router();

router.post("/scores", ADD_GAME_SCORE);
router.get("/scores", GET_GAME_SCORES);

export default router;
