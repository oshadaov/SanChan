import { useState } from "react";
import { tokens } from "../../config/tokens";
import { Btn } from "../common/Btn";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (email.includes("@")) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <section style={{ background: tokens.colors.stone, padding: "72px 24px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: tokens.fonts.mono,
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: tokens.colors.clay,
            marginBottom: 10,
          }}
        >
          Newsletter
        </p>
        <h2
          style={{
            fontFamily: tokens.fonts.display,
            fontSize: "clamp(24px, 4vw, 36px)",
            color: tokens.colors.ink,
            marginBottom: 12,
          }}
        >
          The Novella Edit
        </h2>
        <p
          style={{
            fontFamily: tokens.fonts.body,
            fontSize: 14,
            color: tokens.colors.dust,
            marginBottom: 28,
            lineHeight: 1.6,
          }}
        >
          New arrivals, styling notes, and exclusive offers — delivered to your inbox every Friday.
        </p>
        {sent ? (
          <p style={{ fontFamily: tokens.fonts.body, color: tokens.colors.clay, fontSize: 14 }}>
            ✓ You're on the list. Watch your inbox.
          </p>
        ) : (
          <div style={{ display: "flex", gap: 0 }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "13px 18px",
                border: `1px solid ${tokens.colors.dust}`,
                outline: "none",
                fontFamily: tokens.fonts.body,
                fontSize: 14,
                background: "#fff",
                borderRight: "none",
              }}
            />
            <Btn onClick={submit} style={{ borderLeft: "none" }}>
              Subscribe
            </Btn>
          </div>
        )}
      </div>
    </section>
  );
};
