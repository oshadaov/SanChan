import { useEffect } from "react";
import { tokens } from "../../config/tokens";

export const Toast = ({ message, onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        background: tokens.colors.ink,
        color: "#fff",
        padding: "12px 24px",
        fontFamily: tokens.fonts.body,
        fontSize: 13,
        letterSpacing: 0.5,
        zIndex: 600,
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        whiteSpace: "nowrap",
      }}
    >
      ✓ {message}
    </div>
  );
};
