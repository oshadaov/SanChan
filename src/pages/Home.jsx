import { useStore } from "../admin/context/StoreContext";
import { HeroSection } from "../components/sections/HeroSection";
import { PerksBar } from "../components/sections/PerksBar";
import { CategoryGrid } from "../components/sections/CategoryGrid";
import { BannerCTA } from "../components/sections/BannerCTA";
import { Testimonials } from "../components/sections/Testimonials";
import { Newsletter } from "../components/sections/Newsletter";
import { OwnerProfile } from "../components/sections/OwnerProfile";
import { ProductGrid } from "../components/product/ProductGrid";

export default function Home({ onAddToCart, wishlist }) {
  const { products } = useStore();

  return (
    <div>
      <HeroSection />
      <PerksBar />
      <CategoryGrid />

      <ProductGrid
        title="New Arrivals"
        eyebrow="Just Landed"
        filter="new-in"
        products={products}
        onAddToCart={onAddToCart}
        wishlist={wishlist}
        onWishlistToggle={wishlist.toggle}
      />

      <BannerCTA
        headline="This Season's Dresses"
        sub="From daytime ease to evening edge — every occasion, covered."
        cta="Shop Dresses"
        href="/category/dresses"
        bg="linear-gradient(120deg, #2d1f1a 0%, #4a3020 60%, #b07d62 100%)"
      />

      <ProductGrid
        title="Dresses"
        eyebrow="The Edit"
        filter="dresses"
        products={products}
        onAddToCart={onAddToCart}
        wishlist={wishlist}
        onWishlistToggle={wishlist.toggle}
      />

      <ProductGrid
        title="Office Wear"
        eyebrow="Work Ready"
        filter="office"
        products={products}
        onAddToCart={onAddToCart}
        wishlist={wishlist}
        onWishlistToggle={wishlist.toggle}
      />

      <BannerCTA
        headline="The Casual Chapter"
        sub="Relaxed silhouettes, elevated fabrics. Dress down, never out."
        cta="Shop Casual Wear"
        href="/category/casual"
        bg="linear-gradient(120deg, #1e2830 0%, #2e3e30 60%, #6b8f71 100%)"
      />

      <ProductGrid
        title="Casual Wear"
        eyebrow="Everyday Ease"
        filter="casual"
        products={products}
        onAddToCart={onAddToCart}
        wishlist={wishlist}
        onWishlistToggle={wishlist.toggle}
      />

      <ProductGrid
        title="Shop Men"
        eyebrow="His Edit"
        filter="men"
        products={products}
        onAddToCart={onAddToCart}
        wishlist={wishlist}
        onWishlistToggle={wishlist.toggle}
      />

      <ProductGrid
        title="On Sale"
        eyebrow="Special Prices"
        filter="sale"
        products={products}
        onAddToCart={onAddToCart}
        wishlist={wishlist}
        onWishlistToggle={wishlist.toggle}
      />

      <OwnerProfile />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
