import { v4 as uuidv4 } from "uuid";
import encounterModel from "../models/encounter.js";

export const ADD_ENCOUNTER = async (req, res) => {
  try {
    const encounter = new encounterModel({
      ...req.body,
    });

    const existingEncounters = await encounterModel.find();
    const encounters = existingEncounters.filter((e) => e.id === encounter.id);

    if (encounters.length >= 1) {
      return res.status(400).json({
        message: "Encounter with such id exists",
        existingEncounter: encounters,
        newEncounter: encounter,
      });
    }

    const response = await encounter.save();

    return res
      .status(200)
      .json({ message: "New encounter has been added", encounter: response });
  } catch (err) {
    console.log(err);
  }
};

export const GET_ENCOUNTER_BY_ID = async (req, res) => {
  try {
    const encounter = await encounterModel.findOne({ id: req.params.id });

    if (!encounter) {
      return res.status(404).json({ message: "Encounter not found" });
    }

    return res.json({ encounter });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
