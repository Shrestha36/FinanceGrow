import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  ErrorText,
  Title,
  Subtitle,
  PageWrapper,
  LoginCard,
  LeftSection,
  Brand,
  WelcomeText,
  RightSection,
} from "../styles/login.style.js";

function Login() {
  const navigate = useNavigate();

  // login | signup | profile
  const [step, setStep] = useState("login");

  const [identifier, setIdentifier] = useState(""); // email or phone
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  // profile
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`\\|-]).{8,}$/;

  // ----------------------
  // LOGIN
  // ----------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier,
            password,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Account not found. Please sign up first.");
        }

        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);

      // ✅ old user → home
      if (data.hasProfile) {
        navigate("/home");
      }
      // ✅ new user → profile
      else {
        setStep("profile");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ----------------------
  // SIGNUP
  // ----------------------
  const handleSignup = async () => {
    if (!identifier || !password) {
      setError("All fields are required");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters, include one capital letter and one special character",
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier,
            password,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setUser(data.user);
      setStep("profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ----------------------
  // PROFILE
  // ----------------------
  const handleProfileSave = async () => {
    if (!user?._id) {
      setError("User not found. Please login again.");
      return;
    }

    if (!username || !address) {
      setError("Please fill all profile fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user._id, // ✅ ONLY ObjectId
          username,
          address,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Profile already exists") {
          navigate("/home");
          return;
        }

        throw new Error(data.message || "Profile save failed");
      }

      localStorage.setItem("profile", JSON.stringify(data.profile));
      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <LoginCard>
        <LeftSection>
          <Brand>
            Welcome to <span>FinanceGrow</span>
          </Brand>

          <WelcomeText>
            Take control of your finances, track your spending, and grow your
            savings with smart insights.
          </WelcomeText>
        </LeftSection>

        <RightSection>
          {/* ---------------- LOGIN ---------------- */}
          {step === "login" && (
            <>
              <Title>Login</Title>
              <Subtitle>Enter your credentials to continue</Subtitle>

              <form onSubmit={handleLogin}>
                <Input
                  placeholder="Email or phone number"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  disabled={loading}
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />

                {error && <ErrorText>{error}</ErrorText>}

                <Button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>

              <Button
                type="button"
                style={{
                  marginTop: 10,
                  background: "transparent",
                  color: "#22d3ee",
                }}
                onClick={() => {
                  setError("");
                  setPassword("");
                  setStep("signup");
                }}
              >
                New user? Create account
              </Button>
            </>
          )}

          {/* ---------------- SIGNUP ---------------- */}
          {step === "signup" && (
            <>
              <Title>Create account</Title>
              <Subtitle>Sign up to get started</Subtitle>

              <Input
                placeholder="Email or phone number"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                disabled={loading}
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />

              {error && <ErrorText>{error}</ErrorText>}

              <Button onClick={handleSignup} disabled={loading}>
                {loading ? "Creating..." : "Create account"}
              </Button>

              <Button
                type="button"
                style={{
                  marginTop: 10,
                  background: "transparent",
                  color: "#22d3ee",
                }}
                onClick={() => {
                  setError("");
                  setPassword("");
                  setStep("login");
                }}
              >
                Already have an account? Login
              </Button>
            </>
          )}

          {/* ---------------- PROFILE ---------------- */}
          {step === "profile" && (
            <>
              <Title>Create profile</Title>
              <Subtitle>Complete your profile</Subtitle>

              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
              />

              <Input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={loading}
              />

              {error && <ErrorText>{error}</ErrorText>}

              <Button onClick={handleProfileSave} disabled={loading}>
                {loading ? "Saving..." : "Continue"}
              </Button>
            </>
          )}
        </RightSection>
      </LoginCard>
    </PageWrapper>
  );
}

export default Login;
