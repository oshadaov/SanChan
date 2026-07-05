import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tokens } from "../config/tokens";
import { useStore } from "../admin/context/StoreContext";
import { ProductCard } from "../components/product/ProductCard";
import { SectionHeader } from "../components/common/SectionHeader";

const categoryMap = {
  "new-in": {
    title: "New In",
    eyebrow: "Just Landed",
    desc: "Explore our latest arrivals, designed for modern elegance and timeless style.",
  },
  dresses: {
    title: "Dresses",
    eyebrow: "The Dress Edit",
    desc: "From day-to-night ease to structured editorial silhouettes.",
  },
  tops: {
    title: "Tops & Blouses",
    eyebrow: "Everyday Tops",
    desc: "Crisp shirts, drape blouses, and perfect layering essentials.",
  },
  office: {
    title: "Office Wear",
    eyebrow: "Work Ready",
    desc: "Command the room with sharp, tailored formal trousers and structured blouses.",
  },
  casual: {
    title: "Casual Wear",
    eyebrow: "Everyday Ease",
    desc: "Relaxed silhouettes and lightweight linen blends to ease into the week.",
  },
  men: {
    title: "Shop Men",
    eyebrow: "His Edit",
    desc: "Essential tailored chinos, crisp tees, and structured essentials for the modern man.",
  },
  sale: {
    title: "On Sale",
    eyebrow: "Special Prices",
    desc: "Add to your narrative with wardrobe favorites at exclusive promotional pricing.",
  },
};

export default function Category({ onAddToCart, wishlist }) {
  const { products } = useStore();
  const { id } = useParams();
  const catInfo = categoryMap[id] || {
    title: "Shop All",
    eyebrow: "Collection",
    desc: "Curated fashion pieces crafted to last seasons, not trends.",
  };

  // Filter logic
  let filteredProducts = products.filter((p) => p.category === id);

  // Smart fallback for "tops" category which is defined in menu but not natively stored
  if (id === "tops") {
    filteredProducts = products.filter(
      (p) =>
        p.category === "tops" ||
        p.name.toLowerCase().includes("shirt") ||
        p.name.toLowerCase().includes("blouse") ||
        p.name.toLowerCase().includes("top") ||
        p.name.toLowerCase().includes("tee")
    );
  }

  // Sort state
  const [sortBy, setSortBy] = useState("default");

  if (sortBy === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ background: tokens.colors.ivory, minHeight: "80vh", padding: "40px 24px 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            gap: 8,
            fontSize: 12,
            fontFamily: tokens.fonts.body,
            color: tokens.colors.dust,
            marginBottom: 32,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          <Link to="/" style={{ color: tokens.colors.dust, textDecoration: "none" }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: tokens.colors.clay, fontWeight: 600 }}>{catInfo.title}</span>
        </div>

        {/* Category Header */}
        <div style={{ marginBottom: 48, maxWidth: 640 }}>
          <SectionHeader eyebrow={catInfo.eyebrow} title={catInfo.title} />
          <p
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 15,
              color: tokens.colors.dust,
              lineHeight: 1.6,
              marginTop: -20,
            }}
          >
            {catInfo.desc}
          </p>
        </div>

        {/* Filters and sorting */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${tokens.colors.stone}`,
            paddingBottom: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 13,
              color: tokens.colors.ink,
              fontWeight: 500,
            }}
          >
            Showing {filteredProducts.length} results
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "8px 16px",
                fontFamily: tokens.fonts.body,
                fontSize: 13,
                border: `1px solid ${tokens.colors.stone}`,
                background: "#fff",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="default">Sort by: Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p
              style={{
                fontFamily: tokens.fonts.display,
                fontSize: 22,
                fontStyle: "italic",
                color: tokens.colors.dust,
              }}
            >
              No products found in this category.
            </p>
            <Link
              to="/"
              style={{
                display: "inline-block",
                marginTop: 20,
                color: tokens.colors.clay,
                textDecoration: "none",
                fontWeight: 600,
                borderBottom: `1px solid ${tokens.colors.clay}`,
                paddingBottom: 2,
              }}
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={onAddToCart}
                onWishlistToggle={wishlist.toggle}
                isWishlisted={wishlist.ids.has(p.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
