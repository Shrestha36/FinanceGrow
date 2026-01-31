export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    if (email === "test@financegrow.com" && password === "Test@123") {
      return res.status(200).json({
        success: true,
        user: {
          id: "demo-user-1",
          email,
          name: "FinanceGrow User",
        },
      });
    }

    return res.status(401).json({
      message: "Invalid email or password",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
