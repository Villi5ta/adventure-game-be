import express from "express";
import {
  ADD_ENCOUNTER,
  GET_ENCOUNTER_BY_ID,
} from "../controllers/encounter.js";

const router = express.Router();

router.post("/encounters", ADD_ENCOUNTER);
router.get("/encounter/:id", GET_ENCOUNTER_BY_ID);

export default router;
