import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { tokens } from "../../config/tokens";
import { Logo } from "../common/Logo";
import { IconBtn } from "../common/IconBtn";
import { NAV_LINKS } from "../../data/novellaData";

export const Navbar = ({ cartCount, wishlistCount, onCartOpen, onSearchOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(247,245,241,0.97)" : tokens.colors.ivory,
        borderBottom: `1px solid ${tokens.colors.stone}`,
        boxShadow: scrolled ? "0 2px 20px rgba(26,22,18,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          height: 68,
          gap: 16,
        }}
      >
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-hamburger-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 22,
            color: tokens.colors.ink,
          }}
        >
          ☰
        </button>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Logo />
        </Link>

        {/* Desktop nav links */}
        <div
          className="desktop-nav-links"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              style={{ position: "relative" }}
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={link.href}
                style={({ isActive }) => ({
                  fontFamily: tokens.fonts.body,
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: isActive
                    ? tokens.colors.clay
                    : link.badge
                    ? tokens.colors.clay
                    : tokens.colors.ink,
                  textDecoration: "none",
                  padding: "8px 12px",
                  display: "block",
                  transition: "color 0.15s",
                  borderBottom: isActive ? `2px solid ${tokens.colors.clay}` : "none",
                })}
                onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.clay)}
                onMouseLeave={(e) => {
                  // Re-evaluates active color, simplified
                  e.currentTarget.style.color = link.badge ? tokens.colors.clay : tokens.colors.ink;
                }}
              >
                {link.label}
              </NavLink>
              {link.sub?.length > 0 && activeDropdown === link.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#fff",
                    border: `1px solid ${tokens.colors.stone}`,
                    minWidth: 180,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                    zIndex: 200,
                    padding: "8px 0",
                  }}
                >
                  {link.sub.map((sub) => (
                    <Link
                      key={sub}
                      to={`/category/${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        fontFamily: tokens.fonts.body,
                        fontSize: 12,
                        color: tokens.colors.ink,
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = tokens.colors.stone)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <IconBtn icon="🔍" label="Search" onClick={onSearchOpen} />
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <IconBtn icon="♡" label="Wishlist" count={wishlistCount} />
          </Link>
          <IconBtn
            icon="🛍"
            label="Cart"
            count={cartCount}
            onClick={onCartOpen}
            highlight={cartCount > 0}
          />
        </div>
      </div>

      {/* Simple Mobile Dropdown menu if hamburger clicked */}
      {mobileOpen && (
        <div
          className="mobile-nav-menu"
          style={{
            background: tokens.colors.ivory,
            borderTop: `1px solid ${tokens.colors.stone}`,
            padding: "10px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: link.badge ? tokens.colors.clay : tokens.colors.ink,
                  textDecoration: "none",
                  display: "block",
                  padding: "4px 0",
                }}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div>
            <Link
              to="/wishlist"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                color: tokens.colors.ink,
                textDecoration: "none",
                display: "block",
                padding: "4px 0",
              }}
            >
              Wishlist ({wishlistCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
