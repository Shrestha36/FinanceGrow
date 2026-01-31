import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
