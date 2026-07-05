import { tokens } from "../../config/tokens";

export const Logo = ({ small }) => (
  <div
    style={{
      fontFamily: tokens.fonts.display,
      fontSize: small ? 22 : 28,
      letterSpacing: 3,
      fontWeight: 700,
      color: tokens.colors.ink,
      userSelect: "none",
    }}
  >
    <span style={{ color: tokens.colors.clay }}>N</span>OVELLA
  </div>
);
