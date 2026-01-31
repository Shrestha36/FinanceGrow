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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 👉 profile step
  const [step, setStep] = useState("login");
  const [user, setUser] = useState(null);

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`\\|-]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
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

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ store token
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ keep user in state
      setUser(data.user);

      // 👉 move to profile step instead of navigating
      setStep("profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------
  // PROFILE SUBMIT (frontend only for now)
  // ---------------------------------------
  const handleProfileSave = async () => {
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
          userId: user.email,
          username,
          address,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Profile save failed");
      }

      // optional local cache
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
          {step === "login" && (
            <>
              <Title>Login</Title>
              <Subtitle>Enter your credentials to continue</Subtitle>

              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            </>
          )}

          {step === "profile" && (
            <>
              <Title>Create profile</Title>
              <Subtitle>Complete your profile</Subtitle>

              {/* avatar optional later */}
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              {error && <ErrorText>{error}</ErrorText>}

              <Button onClick={handleProfileSave}>Continue</Button>
            </>
          )}
        </RightSection>
      </LoginCard>
    </PageWrapper>
  );
}

export default Login;
