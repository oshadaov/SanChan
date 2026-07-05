export const tokens = {
  colors: {
    ink: "#1a1612",
    ivory: "#f7f5f1",
    stone: "#e8e4dd",
    dust: "#c9c2b5",
    clay: "#b07d62",
    claySoft: "#d4a48a",
    clayLight: "#f0e0d4",
    white: "#ffffff",
    error: "#c0392b",
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif",
    mono: "'DM Mono', monospace",
  },
};

export const injectFonts = () => {
  if (typeof window === "undefined" || document.getElementById("novella-fonts")) return;
  const link = document.createElement("link");
  link.id = "novella-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400&display=swap";
  document.head.appendChild(link);
};
