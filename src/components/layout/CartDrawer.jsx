import { tokens } from "../../config/tokens";
import { Btn } from "../common/Btn";

export const CartDrawer = ({ cart, onClose, onUpdate, onRemove }) => {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500 }}>
      <div
        onClick={onClose}
        style={{ position: "absolute", inset: 0, background: "rgba(26,22,18,0.45)" }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "min(420px, 100vw)",
          background: tokens.colors.ivory,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            padding: "24px 28px",
            borderBottom: `1px solid ${tokens.colors.stone}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: tokens.fonts.display,
              fontSize: 22,
              margin: 0,
              color: tokens.colors.ink,
            }}
          >
            Your Cart
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 22,
              color: tokens.colors.dust,
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px" }}>
          {cart.items.length === 0 ? (
            <div style={{ textAlign: "center", paddingTop: 60 }}>
              <p
                style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: 20,
                  color: tokens.colors.dust,
                  fontStyle: "italic",
                }}
              >
                Your cart is empty.
              </p>
              <Btn variant="outline" onClick={onClose} style={{ marginTop: 20 }}>
                Continue Shopping
              </Btn>
            </div>
          ) : (
            cart.items.map((item) => (
              <div
                key={item.id + item.size}
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 24,
                  paddingBottom: 24,
                  borderBottom: `1px solid ${tokens.colors.stone}`,
                }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: 72,
                      height: 90,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 72,
                      height: 90,
                      background: `linear-gradient(135deg, ${item.hue}, ${tokens.colors.stone})`,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                    }}
                  >
                    👗
                  </div>
                )}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: tokens.fonts.display,
                      fontSize: 14,
                      fontWeight: 600,
                      color: tokens.colors.ink,
                      marginBottom: 4,
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: 11,
                      color: tokens.colors.dust,
                      marginBottom: 8,
                    }}
                  >
                    Size: {item.size}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: `1px solid ${tokens.colors.stone}`,
                      }}
                    >
                      <button
                        onClick={() => onUpdate(item.id, item.size, item.qty - 1)}
                        style={{
                          width: 28,
                          height: 28,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: 14,
                        }}
                      >
                        −
                      </button>
                      <span
                        style={{
                          width: 28,
                          textAlign: "center",
                          fontFamily: tokens.fonts.body,
                          fontSize: 13,
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdate(item.id, item.size, item.qty + 1)}
                        style={{
                          width: 28,
                          height: 28,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: 14,
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onRemove(item.id, item.size)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: tokens.colors.dust,
                        fontSize: 12,
                        fontFamily: tokens.fonts.body,
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: 14,
                    fontWeight: 600,
                    color: tokens.colors.ink,
                    flexShrink: 0,
                  }}
                >
                  Rs {(item.price * item.qty).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

        {cart.items.length > 0 && (
          <div style={{ padding: "20px 28px", borderTop: `1px solid ${tokens.colors.stone}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: tokens.colors.ink }}>
                Subtotal
              </span>
              <span
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: 16,
                  fontWeight: 700,
                  color: tokens.colors.ink,
                }}
              >
                Rs {cart.total.toLocaleString()}
              </span>
            </div>
            <Btn style={{ width: "100%", display: "block", textAlign: "center" }}>
              Proceed to Checkout →
            </Btn>
            <p
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: 11,
                color: tokens.colors.dust,
                textAlign: "center",
                marginTop: 12,
              }}
            >
              Taxes & shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
