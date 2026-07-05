import { tokens } from "../../config/tokens";
import { PERKS } from "../../data/novellaData";

export const PerksBar = () => (
  <div style={{ background: tokens.colors.ink, padding: "20px 0" }}>
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 24,
      }}
    >
      {PERKS.map((p) => (
        <div key={p.title} style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 22 }}>{p.icon}</span>
          <div>
            <div
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: 12,
                fontWeight: 600,
                color: "#fff",
                letterSpacing: 0.5,
              }}
            >
              {p.title}
            </div>
            <div
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: 11,
                color: tokens.colors.dust,
                marginTop: 2,
              }}
            >
              {p.detail}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
