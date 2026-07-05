import { tokens } from "../../config/tokens";

export const SectionHeader = ({ eyebrow, title, center }) => (
  <div style={{ textAlign: center ? "center" : "left", marginBottom: 40 }}>
    {eyebrow && (
      <p
        style={{
          fontFamily: tokens.fonts.body,
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: tokens.colors.clay,
          marginBottom: 10,
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </p>
    )}
    <h2
      style={{
        fontFamily: tokens.fonts.display,
        fontSize: "clamp(28px, 4vw, 42px)",
        fontWeight: 700,
        color: tokens.colors.ink,
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      {title}
    </h2>
    <div
      style={{
        width: 40,
        height: 2,
        background: tokens.colors.clay,
        marginTop: 16,
        marginLeft: center ? "auto" : 0,
        marginRight: center ? "auto" : 0,
      }}
    />
  </div>
);
