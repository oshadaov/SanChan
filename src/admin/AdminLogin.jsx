import { useState } from "react";
import { tokens } from "../config/tokens";
import { Btn } from "../components/common/Btn";

export const AdminLogin = ({ onLogin }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === "1234") {
      sessionStorage.setItem("admin_authed", "true");
      onLogin();
    } else {
      setError(true);
      setPin("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: tokens.colors.ivory,
        fontFamily: tokens.fonts.body,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 60,
          borderRadius: 8,
          boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          textAlign: "center",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: tokens.fonts.display,
            fontSize: 32,
            margin: "0 0 8px",
            color: tokens.colors.ink,
            letterSpacing: -1,
          }}
        >
          Novella <span style={{ color: tokens.colors.clay }}>Admin</span>
        </h1>
        <p style={{ color: tokens.colors.dust, marginBottom: 32, fontSize: 14 }}>
          Enter PIN to access the dashboard
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError(false);
            }}
            placeholder="PIN Code"
            style={{
              width: "100%",
              padding: "16px",
              fontSize: 18,
              textAlign: "center",
              letterSpacing: 8,
              border: `1px solid ${error ? "red" : tokens.colors.stone}`,
              borderRadius: 4,
              marginBottom: 24,
              fontFamily: "monospace",
              outline: "none",
            }}
            autoFocus
          />
          {error && (
            <div style={{ color: "red", fontSize: 12, marginBottom: 16 }}>
              Invalid PIN. Try "1234".
            </div>
          )}
          <Btn type="submit" style={{ width: "100%", padding: "16px" }}>
            Access Dashboard
          </Btn>
        </form>
      </div>
    </div>
  );
};
