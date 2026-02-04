import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      sparse: true,   // allows null + unique
      trim: true,
      lowercase: true
    },

    phone: {
      type: String,
      unique: true,
      sparse: true
    },

    name: {
      type: String,
      default: ""
    },

    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
