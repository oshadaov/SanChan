import { Link } from "react-router-dom";
import { tokens } from "../../config/tokens";
import { Btn } from "../common/Btn";

export const BannerCTA = ({ bg, headline, sub, cta, href, align = "left" }) => (
  <div
    style={{
      background: bg || tokens.colors.ink,
      padding: "72px 40px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.05,
        backgroundImage: "radial-gradient(circle at 20% 80%, #fff 0%, transparent 50%)",
      }}
    />
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: align === "center" ? "center" : "left",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontFamily: tokens.fonts.display,
          fontSize: "clamp(32px, 5vw, 58px)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.1,
          margin: "0 0 16px",
        }}
      >
        <em style={{ fontStyle: "italic", color: tokens.colors.claySoft }}>{headline}</em>
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: tokens.fonts.body,
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            marginBottom: 28,
          }}
        >
          {sub}
        </p>
      )}
      <Link to={href || "/"} style={{ textDecoration: "none" }}>
        <Btn>{cta}</Btn>
      </Link>
    </div>
  </div>
);
