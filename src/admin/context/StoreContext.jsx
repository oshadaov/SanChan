import { createContext, useContext, useState, useEffect } from "react";
import {
  PRODUCTS as DEFAULT_PRODUCTS,
  CATEGORIES as DEFAULT_CATEGORIES,
  HERO_SLIDES as DEFAULT_SLIDES,
  TESTIMONIALS as DEFAULT_TESTIMONIALS,
} from "../../data/novellaData";

const StoreContext = createContext(null);

const load = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // silently fail on storage errors
  }
};

export function StoreProvider({ children }) {
  const [products, setProducts] = useState(() => load("novella_products", DEFAULT_PRODUCTS));
  const [categories, setCategories] = useState(() => load("novella_categories", DEFAULT_CATEGORIES));
  const [slides, setSlides] = useState(() => load("novella_slides", DEFAULT_SLIDES));
  const [testimonials, setTestimonials] = useState(() => load("novella_testimonials", DEFAULT_TESTIMONIALS));

  useEffect(() => { save("novella_products", products); }, [products]);
  useEffect(() => { save("novella_categories", categories); }, [categories]);
  useEffect(() => { save("novella_slides", slides); }, [slides]);
  useEffect(() => { save("novella_testimonials", testimonials); }, [testimonials]);

  // ── Products ──────────────────────────────────────────────
  const addProduct = (product) =>
    setProducts((prev) => [...prev, { ...product, id: `p-${Date.now()}` }]);

  const updateProduct = (id, patch) =>
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const deleteProduct = (id) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  // ── Categories ────────────────────────────────────────────
  const addCategory = (cat) =>
    setCategories((prev) => [...prev, { ...cat, id: `cat-${Date.now()}` }]);

  const updateCategory = (id, patch) =>
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));

  const deleteCategory = (id) =>
    setCategories((prev) => prev.filter((c) => c.id !== id));

  // ── Hero Slides ───────────────────────────────────────────
  const addSlide = (slide) =>
    setSlides((prev) => [...prev, { ...slide, id: Date.now() }]);

  const updateSlide = (id, patch) =>
    setSlides((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const deleteSlide = (id) =>
    setSlides((prev) => prev.filter((s) => s.id !== id));

  const reorderSlide = (id, direction) => {
    setSlides((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      const next = [...prev];
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= next.length) return prev;
      [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
      return next;
    });
  };

  // ── Testimonials ──────────────────────────────────────────
  const addTestimonial = (t) =>
    setTestimonials((prev) => [...prev, { ...t, id: `t-${Date.now()}` }]);

  const updateTestimonial = (id, patch) =>
    setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));

  const deleteTestimonial = (id) =>
    setTestimonials((prev) => prev.filter((t) => t.id !== id));

  const resetAll = () => {
    setProducts(DEFAULT_PRODUCTS);
    setCategories(DEFAULT_CATEGORIES);
    setSlides(DEFAULT_SLIDES);
    setTestimonials(DEFAULT_TESTIMONIALS);
    ["novella_products","novella_categories","novella_slides","novella_testimonials"]
      .forEach((k) => localStorage.removeItem(k));
  };

  return (
    <StoreContext.Provider
      value={{
        products, addProduct, updateProduct, deleteProduct,
        categories, addCategory, updateCategory, deleteCategory,
        slides, addSlide, updateSlide, deleteSlide, reorderSlide,
        testimonials, addTestimonial, updateTestimonial, deleteTestimonial,
        resetAll,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
};
