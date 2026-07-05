import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../config/tokens";
import { useStore } from "../../admin/context/StoreContext";
import { Btn } from "../common/Btn";

export const HeroSection = () => {
  const { slides } = useStore();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[active];

  return (
    <div
      style={{
        position: "relative",
        height: "min(90vh, 680px)",
        overflow: "hidden",
        background: slide.bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 0.8s ease",
      }}
    >
      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 580 }}>
          <p
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 11,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: slide.accent,
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            {slide.subline}
          </p>
          <h1
            style={{
              fontFamily: tokens.fonts.display,
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.0,
              margin: "0 0 28px",
              letterSpacing: -1,
            }}
          >
            <em style={{ fontStyle: "italic", color: slide.accent }}>
              {slide.headline.split(" ")[0]}
            </em>{" "}
            {slide.headline.split(" ").slice(1).join(" ")}
          </h1>
          <Link to={slide.href} style={{ textDecoration: "none" }}>
            <Btn style={{ fontSize: 12, letterSpacing: 2, padding: "14px 36px" }}>
              {slide.cta} →
            </Btn>
          </Link>
        </div>
      </div>

      {/* Slide dots */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 28 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              background: i === active ? "#fff" : "rgba(255,255,255,0.35)",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide number */}
      <div
        style={{
          position: "absolute",
          right: 40,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
        }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            style={{
              width: 1,
              height: i === active ? 40 : 20,
              background: i === active ? "#fff" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};
