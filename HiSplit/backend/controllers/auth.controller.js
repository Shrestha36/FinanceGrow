export const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        message: "Email / phone and password are required",
      });
    }

    // 👉 demo user logic (for now)
    const isValidUser =
      (identifier === "test@financegrow.com" ||
        identifier === "9999999999") &&
      password === "Test@123";

    if (!isValidUser) {
      return res.status(401).json({
        message: "Invalid email/phone or password",
      });
    }

    // 👉 fake user
    const user = {
      _id: "demo-user-1",
      email:
        identifier.includes("@") ? identifier : "test@financegrow.com",
      phone: identifier.includes("@") ? null : identifier,
      name: "FinanceGrow User",
    };

    // 👉 for now assume profile already exists
    // later you will check DB
    const hasProfile = true;

    return res.status(200).json({
      success: true,
      user,
      hasProfile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ⚠️ demo only (no DB yet)
    const user = {
      _id: "demo-user-2",
      email: identifier.includes("@") ? identifier : null,
      phone: identifier.includes("@") ? null : identifier,
    };

    return res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Register failed" });
  }
};

