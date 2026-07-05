import { Link } from "react-router-dom";
import { tokens } from "../../config/tokens";
import { useStore } from "../../admin/context/StoreContext";
import { SectionHeader } from "../common/SectionHeader";

export const CategoryGrid = () => {
  const { categories } = useStore();
  return (
  <section style={{ background: tokens.colors.ivory, padding: "72px 24px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <SectionHeader eyebrow="Browse" title="Shop by Category" center />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 12,
        }}
      >
        {categories.map((cat) => (
          <Link key={cat.id} to={cat.href} style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "#fff",
                border: `1px solid ${tokens.colors.stone}`,
                padding: "28px 20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tokens.colors.clay;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = tokens.colors.stone;
                e.currentTarget.style.transform = "none";
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>{cat.icon}</div>
              <div
                style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: 14,
                  fontWeight: 600,
                  color: tokens.colors.ink,
                  marginBottom: 4,
                }}
              >
                {cat.label}
              </div>
              <div
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: 11,
                  color: tokens.colors.dust,
                  letterSpacing: 0.5,
                }}
              >
                {cat.count}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
};
