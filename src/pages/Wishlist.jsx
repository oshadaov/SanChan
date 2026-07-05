import { Link } from "react-router-dom";
import { tokens } from "../config/tokens";
import { useStore } from "../admin/context/StoreContext";
import { ProductCard } from "../components/product/ProductCard";
import { SectionHeader } from "../components/common/SectionHeader";

export default function Wishlist({ onAddToCart, wishlist }) {
  const { products } = useStore();
  // Filter products by whether their ID is in wishlist.ids Set
  const wishlistedProducts = products.filter((p) => wishlist.ids.has(p.id));

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
          <span style={{ color: tokens.colors.clay, fontWeight: 600 }}>Wishlist</span>
        </div>

        {/* Section Header */}
        <div style={{ marginBottom: 48 }}>
          <SectionHeader eyebrow="Your Favorites" title="Saved Items" />
        </div>

        {/* Product Grid */}
        {wishlistedProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p
              style={{
                fontFamily: tokens.fonts.display,
                fontSize: 22,
                fontStyle: "italic",
                color: tokens.colors.dust,
                marginBottom: 20,
              }}
            >
              Your wishlist is currently empty.
            </p>
            <Link
              to="/"
              style={{
                display: "inline-block",
                color: tokens.colors.clay,
                textDecoration: "none",
                fontWeight: 600,
                borderBottom: `1px solid ${tokens.colors.clay}`,
                paddingBottom: 2,
              }}
            >
              Discover Products
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
            {wishlistedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={onAddToCart}
                onWishlistToggle={wishlist.toggle}
                isWishlisted={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
