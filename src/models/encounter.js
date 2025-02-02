import mongoose from "mongoose";

const EncounterSchema = new mongoose.Schema({
  id: Number,
  description: String,
  choices: [
    {
      optionDescription: String,
      resultMessage: String,
      healthChange: Number,
      upgradePointsReward: Number,
      moneyReward: Number,
      nextEncounterId: Number,
    },
  ],
});

export default mongoose.model("Encounter", EncounterSchema);
