import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true
    },

    username: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    avatar: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
