import { useState, useEffect } from "react";
import { tokens } from "../../config/tokens";

export const AnnouncementBar = () => {
  const messages = [
    "✦  Free shipping on orders above Rs 7,000",
    "✦  New arrivals every Friday",
    "✦  Easy 30-day returns — no questions asked",
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 3500);
    return () => clearInterval(t);
  }, [messages.length]);

  return (
    <div
      style={{
        background: tokens.colors.ink,
        color: "#fff",
        textAlign: "center",
        padding: "9px 20px",
        fontSize: 12,
        letterSpacing: 1.5,
        fontFamily: tokens.fonts.body,
        fontWeight: 400,
      }}
    >
      {messages[idx]}
    </div>
  );
};
