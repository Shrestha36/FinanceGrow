import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
      type: String, // url (optional)
      default: ""
    }
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
