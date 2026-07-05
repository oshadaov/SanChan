import { useState } from "react";
import { Routes, Route, NavLink, useNavigate, Navigate } from "react-router-dom";
import { tokens } from "../config/tokens";
import { Dashboard } from "./pages/Dashboard";
import { Products } from "./pages/Products";
import { Categories } from "./pages/Categories";
import { HeroSlides } from "./pages/HeroSlides";
import { Testimonials } from "./pages/Testimonials";

const SIDEBAR_WIDTH = 260;

const NavItem = ({ to, label, icon }) => (
  <NavLink
    to={to}
    end={to === "/admin"}
    style={({ isActive }) => ({
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px",
      color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
      textDecoration: "none",
      background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
      borderLeft: `3px solid ${isActive ? tokens.colors.clay : "transparent"}`,
      transition: "all 0.2s",
      fontSize: 14,
      fontWeight: isActive ? 500 : 400,
    })}
  >
    <span style={{ fontSize: 18 }}>{icon}</span>
    {label}
  </NavLink>
);

export const AdminApp = () => {
  const navigate = useNavigate();
  const [isMobileOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authed");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f7f8fc",
        fontFamily: tokens.fonts.body,
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: SIDEBAR_WIDTH,
          background: "#0f1117",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 100,
          transform: isMobileOpen ? "translateX(0)" : "translateX(0)", // Add responsive logic later if needed
          transition: "transform 0.3s",
        }}
      >
        <div style={{ padding: "32px 24px" }}>
          <h2
            style={{
              fontFamily: tokens.fonts.display,
              fontSize: 24,
              margin: 0,
              color: "#fff",
            }}
          >
            Novella <span style={{ color: tokens.colors.clay, fontStyle: "italic" }}>Admin</span>
          </h2>
        </div>

        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <NavItem to="/admin" label="Dashboard" icon="📊" />
          <NavItem to="/admin/products" label="Products" icon="👗" />
          <NavItem to="/admin/categories" label="Categories" icon="🏷️" />
          <NavItem to="/admin/slides" label="Hero Slides" icon="🖼️" />
          <NavItem to="/admin/testimonials" label="Testimonials" icon="💬" />
        </nav>

        <div style={{ padding: 24 }}>
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              borderRadius: 4,
              fontSize: 14,
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.1)")}
            onMouseOut={(e) => (e.target.style.background = "rgba(255,255,255,0.05)")}
          >
            ← Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          marginLeft: SIDEBAR_WIDTH,
          padding: "40px",
          minWidth: 0,
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/slides" element={<HeroSlides />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </main>
    </div>
  );
};
