import bcrypt from "bcrypt";
import User from "../models/User.js";
import Profile from "../models/Profile.js";

export const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password)
      return res.status(400).json({ message: "All fields required" });

    const isEmail = identifier.includes("@");

    const user = await User.findOne(
      isEmail ? { email: identifier } : { phone: identifier }
    );

    if (!user)
      return res.status(401).json({ message: "Account does not exist. Please signup." });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      return res.status(401).json({ message: "Invalid credentials" });

    const profile = await Profile.findOne({ userId: user._id });

    return res.json({
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        phone: user.phone,
        name: user.name
      },
      hasProfile: !!profile
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



export const registerUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password)
      return res.status(400).json({ message: "All fields required" });

    const isEmail = identifier.includes("@");

    const existing = await User.findOne(
      isEmail ? { email: identifier } : { phone: identifier }
    );

    if (existing) {
      return res
        .status(400)
        .json({ message: "Account already exists. Please login." });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: isEmail ? identifier : null,
      phone: isEmail ? null : identifier,
      password: hashed
    });

    return res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Register failed" });
  }
};
