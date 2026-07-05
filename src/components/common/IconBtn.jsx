import { tokens } from "../../config/tokens";

export const IconBtn = ({ icon, label, count, onClick, highlight }) => (
  <button
    onClick={onClick}
    title={label}
    style={{
      position: "relative",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 19,
      padding: "6px 8px",
      color: tokens.colors.ink,
      display: "flex",
      alignItems: "center",
    }}
  >
    {icon}
    {count > 0 && (
      <span
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: highlight ? tokens.colors.clay : tokens.colors.dust,
          color: "#fff",
          fontSize: 9,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: tokens.fonts.body,
        }}
      >
        {count}
      </span>
    )}
  </button>
);
