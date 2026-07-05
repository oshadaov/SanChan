import { Link } from "react-router-dom";
import { tokens } from "../../config/tokens";
import { SectionHeader } from "../common/SectionHeader";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({
  title,
  eyebrow,
  filter,
  products,
  onAddToCart,
  wishlist,
  onWishlistToggle,
}) => {
  const filtered = filter ? products.filter((p) => p.category === filter) : products;
  if (!filtered.length) return null;

  return (
    <section
      id={filter || "products"}
      style={{
        background: filter === "sale" ? tokens.colors.stone : "#fff",
        padding: "72px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <SectionHeader eyebrow={eyebrow} title={title} />
          {filter && (
            <Link
              to={`/category/${filter}`}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: 12,
                letterSpacing: 1.5,
                color: tokens.colors.clay,
                textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: `1px solid ${tokens.colors.clay}`,
                paddingBottom: 2,
              }}
            >
              See All →
            </Link>
          )}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              onWishlistToggle={onWishlistToggle}
              isWishlisted={wishlist.ids.has(p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
