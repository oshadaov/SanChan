import { tokens } from "../../config/tokens";

export const Btn = ({ children, onClick, variant = "primary", small, style: sx }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: small ? "8px 18px" : "12px 28px",
    fontSize: small ? 12 : 13,
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "all 0.22s ease",
    fontFamily: tokens.fonts.body,
    borderRadius: 0,
  };

  const styles = {
    primary: { background: tokens.colors.clay, color: "#fff" },
    outline: {
      background: "transparent",
      color: tokens.colors.clay,
      border: `1.5px solid ${tokens.colors.clay}`,
    },
    ghost: {
      background: "transparent",
      color: tokens.colors.ink,
      border: `1.5px solid ${tokens.colors.dust}`,
    },
    dark: { background: tokens.colors.ink, color: "#fff" },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...base, ...styles[variant], ...sx }}
      onMouseEnter={(e) => {
        if (variant === "primary") e.currentTarget.style.background = "#9a6a50";
        if (variant === "outline") {
          e.currentTarget.style.background = tokens.colors.clay;
          e.currentTarget.style.color = "#fff";
        }
        if (variant === "ghost") e.currentTarget.style.borderColor = tokens.colors.ink;
        if (variant === "dark") e.currentTarget.style.background = "#3a3028";
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") e.currentTarget.style.background = tokens.colors.clay;
        if (variant === "outline") {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = tokens.colors.clay;
        }
        if (variant === "ghost") e.currentTarget.style.borderColor = tokens.colors.dust;
        if (variant === "dark") e.currentTarget.style.background = tokens.colors.ink;
      }}
    >
      {children}
    </button>
  );
};
