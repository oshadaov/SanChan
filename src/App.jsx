import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { tokens, injectFonts } from "./config/tokens";
import { useCart } from "./hooks/useCart";
import { useWishlist } from "./hooks/useWishlist";
import { Toast } from "./components/common/Toast";
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CartDrawer } from "./components/layout/CartDrawer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Wishlist from "./pages/Wishlist";

import { StoreProvider } from "./admin/context/StoreContext";
import { AdminApp } from "./admin/AdminApp";
import { AdminLogin } from "./admin/AdminLogin";

const ProtectedAdmin = () => {
  const [authed, setAuthed] = useState(sessionStorage.getItem("admin_authed") === "true");

  if (!authed) {
    return <AdminLogin onLogin={() => setAuthed(true)} />;
  }
  return <AdminApp />;
};

const StorefrontLayout = ({ cart, wishlist }) => {
  const [cartOpen, setCartOpen] = useState(false);
  
  return (
  <div
    style={{
      background: tokens.colors.ivory,
      minHeight: "100vh",
      fontFamily: tokens.fonts.body,
    }}
  >
    <AnnouncementBar />
    <Navbar
      cartCount={cart.count}
      wishlistCount={wishlist.ids.size}
      onCartOpen={() => setCartOpen(true)}
      onSearchOpen={() => {}}
    />

    <main>
      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={(p, s) => cart.add(p, s)} wishlist={wishlist} />}
        />
        <Route
          path="/category/:id"
          element={<Category onAddToCart={(p, s) => cart.add(p, s)} wishlist={wishlist} />}
        />
        <Route
          path="/wishlist"
          element={<Wishlist onAddToCart={(p, s) => cart.add(p, s)} wishlist={wishlist} />}
        />
      </Routes>
    </main>

    <Footer />
    {cartOpen && (
      <CartDrawer
        cart={cart}
        onClose={() => setCartOpen(false)}
        onUpdate={cart.update}
        onRemove={cart.remove}
      />
    )}
  </div>
  );
};

export default function App() {
  const cart = useCart();
  const wishlist = useWishlist();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    injectFonts();
  }, []);

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/*" element={<ProtectedAdmin />} />

          {/* Storefront Routes */}
          <Route
            path="/*"
            element={
              <StorefrontLayout
                cart={cart}
                wishlist={wishlist}
              />
            }
          />
        </Routes>

        {toast && <Toast message={toast} onDone={() => setToast(null)} />}
      </BrowserRouter>
    </StoreProvider>
  );
}
