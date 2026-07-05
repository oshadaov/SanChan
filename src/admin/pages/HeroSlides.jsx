import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { tokens } from "../../config/tokens";
import { Btn } from "../../components/common/Btn";

export const HeroSlides = () => {
  const { slides, addSlide, updateSlide, deleteSlide, reorderSlide } = useStore();
  const [editing, setEditing] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this slide?")) {
      deleteSlide(id);
    }
  };

  const handleAddNew = () => {
    addSlide({
      headline: "New Campaign",
      subline: "Explore Collection",
      cta: "Shop Now",
      href: "/category/new-in",
      bg: "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200)",
      accent: tokens.colors.clay,
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 style={{ fontFamily: tokens.fonts.display, margin: 0 }}>Hero Slides</h1>
        <Btn onClick={handleAddNew}>+ Add Slide</Btn>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {slides.map((s, index) => {
          const isEditing = editing === s.id;

          return (
            <div key={s.id} style={{ background: "#fff", borderRadius: 8, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.02)", display: "flex", gap: 24 }}>
              <div style={{ width: 200, height: 120, background: s.bg, backgroundSize: "cover", backgroundPosition: "center", borderRadius: 4 }} />
              
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                {isEditing ? (
                  <>
                    <input value={s.subline} onChange={(e) => updateSlide(s.id, { subline: e.target.value })} placeholder="Subline (e.g. SUMMER 24)" style={{ padding: 8, fontSize: 12, letterSpacing: 1 }} />
                    <input value={s.headline} onChange={(e) => updateSlide(s.id, { headline: e.target.value })} placeholder="Headline" style={{ padding: 8, fontSize: 24, fontWeight: "bold" }} />
                    <div style={{ display: "flex", gap: 12 }}>
                      <input value={s.cta} onChange={(e) => updateSlide(s.id, { cta: e.target.value })} placeholder="CTA Text" style={{ padding: 8, flex: 1 }} />
                      <input value={s.href} onChange={(e) => updateSlide(s.id, { href: e.target.value })} placeholder="Link URL" style={{ padding: 8, flex: 1 }} />
                    </div>
                    <input value={s.bg} onChange={(e) => updateSlide(s.id, { bg: e.target.value })} placeholder="Background CSS (e.g. url(...))" style={{ padding: 8 }} />
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: s.accent || tokens.colors.dust }}>{s.subline}</div>
                    <div style={{ fontSize: 24, fontWeight: "bold", fontFamily: tokens.fonts.display }}>{s.headline}</div>
                    <div style={{ fontSize: 13, color: tokens.colors.dust }}>CTA: {s.cta} &rarr; {s.href}</div>
                  </>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => reorderSlide(s.id, "up")} disabled={index === 0} style={{ background: "none", border: "1px solid #eee", padding: "4px 8px", cursor: index === 0 ? "not-allowed" : "pointer" }}>↑</button>
                  <button onClick={() => reorderSlide(s.id, "down")} disabled={index === slides.length - 1} style={{ background: "none", border: "1px solid #eee", padding: "4px 8px", cursor: index === slides.length - 1 ? "not-allowed" : "pointer" }}>↓</button>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={() => setEditing(isEditing ? null : s.id)} style={{ background: "none", border: "none", color: tokens.colors.ink, cursor: "pointer" }}>
                    {isEditing ? "Save" : "Edit"}
                  </button>
                  <button onClick={() => handleDelete(s.id)} style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {slides.length === 0 && (
          <div style={{ padding: 40, textAlign: "center", color: tokens.colors.dust, background: "#fff", borderRadius: 8 }}>
            No slides found.
          </div>
        )}
      </div>
    </div>
  );
};
