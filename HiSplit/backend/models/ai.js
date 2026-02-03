import mongoose from "mongoose";

const aiUsageSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true
    },

    aiAdviceCount: {
      type: Number,
      default: 0
    },

    aiPaid: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const AiUsage = mongoose.model("AiUsage", aiUsageSchema);

export default AiUsage;
