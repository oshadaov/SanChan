import { useState } from "react";
import { tokens } from "../../config/tokens";
import { Badge } from "../common/Badge";

export const ProductCard = ({ product, onAddToCart, onWishlistToggle, isWishlisted }) => {
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [showSizes, setShowSizes] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setShowSizes(false);
      }}
      style={{
        background: "#fff",
        border: `1px solid ${tokens.colors.stone}`,
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        boxShadow: hovered ? "0 12px 40px rgba(26,22,18,0.12)" : "none",
        transform: hovered ? "translateY(-4px)" : "none",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Image container */}
      <div
        style={{
          width: "100%",
          paddingBottom: "125%",
          position: "relative",
          background: `linear-gradient(135deg, ${product.hue} 0%, ${tokens.colors.stone} 100%)`,
          overflow: "hidden",
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 48, opacity: 0.35 }}>👗</span>
            <span
              style={{
                fontFamily: tokens.fonts.mono,
                fontSize: 10,
                color: tokens.colors.dust,
                letterSpacing: 2,
              }}
            >
              NOVELLA
            </span>
          </div>
        )}

        {/* Badges */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            zIndex: 2,
          }}
        >
          {product.badge && (
            <Badge
              label={product.badge}
              color={product.badge?.includes("Off") ? "#c0392b" : tokens.colors.clay}
            />
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => onWishlistToggle(product.id)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {/* Quick add overlay */}
        {hovered && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(26,22,18,0.85)",
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              zIndex: 3,
            }}
          >
            {showSizes ? (
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: 10,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 8,
                    fontFamily: tokens.fonts.body,
                  }}
                >
                  Select Size
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {product.sizes && product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSelectedSize(s);
                        onAddToCart(product, s);
                        setShowSizes(false);
                      }}
                      style={{
                        padding: "4px 10px",
                        background: selectedSize === s ? tokens.colors.clay : "transparent",
                        border: `1px solid ${
                          selectedSize === s ? tokens.colors.clay : tokens.colors.dust
                        }`,
                        color: "#fff",
                        fontSize: 11,
                        cursor: "pointer",
                        fontFamily: tokens.fonts.body,
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowSizes(true)}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: tokens.colors.clay,
                  border: "none",
                  color: "#fff",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: tokens.fonts.body,
                  fontWeight: 600,
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "16px 16px 20px" }}>
        {/* Color swatches */}
        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
          {product.colors && product.colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(i)}
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: c,
                border: "none",
                cursor: "pointer",
                outline: selectedColor === i ? `2px solid ${tokens.colors.clay}` : "none",
                outlineOffset: 2,
              }}
            />
          ))}
        </div>
        <h3
          style={{
            fontFamily: tokens.fonts.display,
            fontSize: 15,
            fontWeight: 600,
            color: tokens.colors.ink,
            margin: "0 0 6px",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: tokens.fonts.body,
            fontSize: 12,
            color: tokens.colors.dust,
            margin: "0 0 12px",
            lineHeight: 1.5,
          }}
        >
          {product.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: 16,
              fontWeight: 600,
              color: tokens.colors.ink,
            }}
          >
            Rs {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: 13,
                color: tokens.colors.dust,
                textDecoration: "line-through",
              }}
            >
              Rs {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
