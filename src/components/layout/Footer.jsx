import { Link } from "react-router-dom";
import { tokens } from "../../config/tokens";
import { Logo } from "../common/Logo";
import { BRAND, NAV_LINKS } from "../../data/novellaData";

export const Footer = () => (
  <footer style={{ background: tokens.colors.ink, padding: "56px 24px 32px", color: "#fff" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
          marginBottom: 48,
        }}
      >
        {/* Brand */}
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <p
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              marginTop: 16,
              lineHeight: 1.7,
              maxWidth: 240,
            }}
          >
            {BRAND.description.substring(0, 120)}…
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
            {Object.entries(BRAND.social).map(([k, v]) => (
              <a
                key={k}
                href={v}
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: 11,
                  color: tokens.colors.dust,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.clay)}
                onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.dust)}
              >
                {k}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: tokens.colors.dust,
              marginBottom: 18,
            }}
          >
            Shop
          </h4>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              style={{
                display: "block",
                fontFamily: tokens.fonts.body,
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                marginBottom: 10,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Info */}
        <div>
          <h4
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: tokens.colors.dust,
              marginBottom: 18,
            }}
          >
            Information
          </h4>
          {["About Us", "Contact Us", "Shipping & Returns", "Terms & Conditions", "Privacy Policy", "Store Finder"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                display: "block",
                fontFamily: tokens.fonts.body,
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                marginBottom: 10,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: tokens.colors.dust,
              marginBottom: 18,
            }}
          >
            Contact
          </h4>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>
            {BRAND.address}
          </p>
          <a
            href={`mailto:${BRAND.email}`}
            style={{
              display: "block",
              fontFamily: tokens.fonts.body,
              fontSize: 13,
              color: tokens.colors.claySoft,
              textDecoration: "none",
              marginBottom: 6,
            }}
          >
            {BRAND.email}
          </a>
          <a
            href={`tel:${BRAND.phone}`}
            style={{
              display: "block",
              fontFamily: tokens.fonts.body,
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
            }}
          >
            {BRAND.phone}
          </a>
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid rgba(255,255,255,0.1)`,
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © 2026 Novella. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: tokens.fonts.mono,
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: 2,
          }}
        >
          COLOMBO · SRI LANKA
        </p>
      </div>
    </div>
  </footer>
);
