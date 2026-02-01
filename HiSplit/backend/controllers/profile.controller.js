// controllers/profile.controller.js

// TEMP in-memory store (no DB yet)
const profiles = [];

export const createProfile = async (req, res) => {
  try {
    const { userId, username, address } = req.body;

    if (!userId || !username || !address) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const alreadyExists = profiles.find((p) => p.userId === userId);

    if (alreadyExists) {
      return res.status(200).json({
        success: true,
        profile: alreadyExists,
        alreadyExists: true,
      });
    }

    const profile = {
      userId,
      username,
      address,
    };

    profiles.push(profile);

    return res.status(201).json({
      success: true,
      profile,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = profiles.find((p) => p.userId === userId);

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
