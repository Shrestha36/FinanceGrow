import Profile from "../models/Profile.js";

export const createProfile = async (req, res) => {
  try {
    const { userId, username, address } = req.body;

    if (!userId || !username || !address) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existing = await Profile.findOne({ userId });

    if (existing) {
      return res.status(200).json({
        success: true,
        profile: existing,
        alreadyExists: true,
      });
    }

    const profile = await Profile.create({
      userId,
      username,
      address,
    });

    res.status(201).json({
      success: true,
      profile,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.json(profile);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
