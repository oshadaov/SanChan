import { tokens } from "../../config/tokens";

export const Badge = ({ label, color }) => (
  <span
    style={{
      display: "inline-block",
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      borderRadius: 2,
      background: color || tokens.colors.clay,
      color: "#fff",
      fontFamily: tokens.fonts.body,
    }}
  >
    {label}
  </span>
);
