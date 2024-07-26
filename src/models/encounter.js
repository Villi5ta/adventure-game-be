import mongoose from "mongoose";

const EncounterSchema = new mongoose.Schema({
  id: String,
  description: String,
  choices: [
    {
      optionDescription: String,
      resultMessage: String,
      healthChange: Number,
      upgradePointsReward: Number,
      moneyReward: Number,
      nextEncounterId: String,
    },
  ],
});

export default mongoose.model("Encounter", EncounterSchema);
