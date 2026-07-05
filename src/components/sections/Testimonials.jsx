import { useState } from "react";
import { tokens } from "../../config/tokens";
import { useStore } from "../../admin/context/StoreContext";
import { SectionHeader } from "../common/SectionHeader";
import { StarRating } from "../common/StarRating";

export const Testimonials = () => {
  const { testimonials } = useStore();
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: tokens.colors.clayLight, padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader eyebrow="What They Say" title="Stories from our community" center />
        <div style={{ position: "relative", minHeight: 140 }}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              style={{
                display: i === active ? "block" : "none",
                animation: "fadeIn 0.5s ease",
              }}
            >
              <StarRating n={t.rating} />
              <p
                style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: "clamp(17px, 2.5vw, 22px)",
                  fontStyle: "italic",
                  color: tokens.colors.ink,
                  lineHeight: 1.6,
                  margin: "16px 0 24px",
                }}
              >
                "{t.text}"
              </p>
              <p
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: tokens.colors.clay,
                  fontWeight: 600,
                }}
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                background: i === active ? tokens.colors.clay : tokens.colors.dust,
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
