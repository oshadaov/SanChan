import { tokens } from "../config/tokens";

export const BRAND = {
  name: "Novella",
  tagline: "Dressed for the story you're writing.",
  description:
    "Novella is a curated fashion house for women and men who believe clothing is a quiet form of autobiography. Each piece is crafted to last seasons, not trends.",
  email: "hello@novella.lk",
  phone: "+94 77 123 4567",
  address: "42 Flower Road, Colombo 03, Sri Lanka",
  social: {
    instagram: "#",
    facebook: "#",
    pinterest: "#",
  },
};

export const NAV_LINKS = [
  {
    label: "New In",
    href: "/category/new-in",
    sub: ["Office Wear", "Casual Wear", "Linen Wear", "White Wear"],
  },
  {
    label: "Dresses",
    href: "/category/dresses",
    sub: ["Party Dresses", "Casual Dresses", "White Dresses"],
  },
  {
    label: "Tops & Blouses",
    href: "/category/tops",
    sub: ["White Tops", "Casual Tops", "T-Shirts"],
  },
  {
    label: "Office Wear",
    href: "/category/office",
    sub: ["Blouses", "Pants", "Kurtha"],
  },
  { label: "Casual Wear", href: "/category/casual", sub: [] },
  {
    label: "Shop Men",
    href: "/category/men",
    sub: ["T-Shirts", "Trousers", "Formal Wear"],
  },
  {
    label: "On Sale",
    href: "/category/sale",
    sub: [],
    badge: "SALE",
  },
];

export const HERO_SLIDES = [
  {
    id: 1,
    headline: "The New Chapter",
    subline: "Office Wear · Summer '26",
    cta: "Explore Collection",
    href: "/category/office",
    color: "#2d2420",
    accent: tokens.colors.clay,
    bg: "linear-gradient(rgba(26,22,18,0.3), rgba(26,22,18,0.7)), url('https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    id: 2,
    headline: "Effortless Sundays",
    subline: "Casual & Linen · New Arrivals",
    cta: "Shop Now",
    href: "/category/casual",
    color: "#1e2830",
    accent: "#6b8f71",
    bg: "linear-gradient(rgba(26,22,18,0.3), rgba(26,22,18,0.7)), url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    id: 3,
    headline: "Dressed in White",
    subline: "Pure White · Timeless Pieces",
    cta: "See Collection",
    href: "/category/new-in",
    color: "#1a1612",
    accent: "#c9c2b5",
    bg: "linear-gradient(rgba(26,22,18,0.3), rgba(26,22,18,0.7)), url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80')",
  },
];

export const CATEGORIES = [
  { id: "cat-1", label: "Office Wear", icon: "💼", href: "/category/office", count: "48 pieces" },
  { id: "cat-2", label: "Dresses", icon: "👗", href: "/category/dresses", count: "62 pieces" },
  { id: "cat-3", label: "Casual Wear", icon: "🌿", href: "/category/casual", count: "35 pieces" },
  { id: "cat-4", label: "Tops & Blouses", icon: "✨", href: "/category/tops", count: "54 pieces" },
  { id: "cat-5", label: "Shop Men", icon: "👔", href: "/category/men", count: "29 pieces" },
  { id: "cat-6", label: "On Sale", icon: "🏷️", href: "/category/sale", count: "Up to 50% off" },
];

export const PRODUCTS = [
  // New In
  {
    id: "p-001", name: "Folded Sleeve Striped Shirt Blouse", category: "new-in",
    price: 6800, originalPrice: null, badge: "New",
    colors: ["#f5f0e8", "#2d2d2d", "#b07d62"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A refined striped shirt blouse with elegantly folded sleeves. Perfect from desk to dinner.",
    hue: "#e8d5c4",
    image: "https://images.unsplash.com/photo-1548624149-f7b2e65922b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-002", name: "Sleeveless Vest Style Blazer", category: "new-in",
    price: 8500, originalPrice: null, badge: "New",
    colors: ["#1a1612", "#c9c2b5", "#b07d62"],
    sizes: ["XS", "S", "M", "L"],
    description: "A structured sleeveless blazer that commands the room. Pair with wide-leg trousers.",
    hue: "#d4c8b8",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-003", name: "3-Button Wide Leg Pants", category: "new-in",
    price: 8500, originalPrice: null, badge: "New",
    colors: ["#1a1612", "#7a6b5a", "#c9c2b5"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Wide-leg trousers with a triple-button waistband. Fluid, modern, effortless.",
    hue: "#c8bfb0",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-004", name: "High Waisted Formal Pant", category: "new-in",
    price: 9900, originalPrice: null, badge: "New",
    colors: ["#2d2420", "#4a3728", "#f7f5f1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Elevated high-rise formal trousers with a clean, tailored silhouette.",
    hue: "#d0c8bc",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
  },
  // Dresses
  {
    id: "p-005", name: "Dropped Asymmetrical Waist Dress", category: "dresses",
    price: 13900, originalPrice: null, badge: null,
    colors: ["#b07d62", "#1a1612", "#6b8f71"],
    sizes: ["XS", "S", "M", "L"],
    description: "An editorial-worthy dress with a sculpted asymmetrical waist. Wear it, own it.",
    hue: "#e0c8b8",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-006", name: "Puff Sleeve Shirt Dress", category: "dresses",
    price: 10700, originalPrice: null, badge: null,
    colors: ["#f7f5f1", "#b07d62", "#2d4a3a"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A romantic shirt dress with voluminous puff sleeves and a ladder-detail hem.",
    hue: "#f0e8dc",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-007", name: "Smock Strappy Sundress", category: "dresses",
    price: 12200, originalPrice: null, badge: null,
    colors: ["#d4a48a", "#6b8f71", "#1a1612"],
    sizes: ["XS", "S", "M", "L"],
    description: "Gathered smocking at the bodice, adjustable ties at the shoulders. Pure summer.",
    hue: "#e4d0c0",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-008", name: "Charleston Pleated Dress", category: "dresses",
    price: 9700, originalPrice: null, badge: null,
    colors: ["#c9c2b5", "#2d2420", "#b07d62"],
    sizes: ["S", "M", "L", "XL"],
    description: "Tiered pleating from waist to hem creates movement with every step.",
    hue: "#dcd4c8",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
  },
  // Office Wear
  {
    id: "p-009", name: "3/4 Sleeve Button Down Blouse", category: "office",
    price: 6800, originalPrice: null, badge: null,
    colors: ["#f7f5f1", "#c9c2b5", "#2d2420"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A wardrobe cornerstone. Crisp, polished, works for every meeting.",
    hue: "#ede8e0",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-010", name: "Office Slim Fit Pant", category: "office",
    price: 8500, originalPrice: null, badge: null,
    colors: ["#1a1612", "#2d2420", "#7a6b5a"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Slim-cut formal trousers with a triple-button closure. Precision tailoring.",
    hue: "#c4bdb4",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=600&q=80",
  },
  // Casual Wear
  {
    id: "p-011", name: "Gold Swirl Embroidered Kurta", category: "casual",
    price: 8500, originalPrice: null, badge: null,
    colors: ["#f7f5f1", "#2d2420", "#d4a48a"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Delicate gold thread embroidery on a relaxed silhouette. Casual luxury.",
    hue: "#f0e4d4",
    image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-012", name: "Cape Sleeve Top", category: "casual",
    price: 7500, originalPrice: null, badge: null,
    colors: ["#b07d62", "#6b8f71", "#f7f5f1"],
    sizes: ["XS", "S", "M", "L"],
    description: "Flowing cape sleeves that move beautifully. Pairs with anything in your wardrobe.",
    hue: "#e4d4c4",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=600&q=80",
  },
  // Men
  {
    id: "p-013", name: "Men's Slim Fit Chino", category: "men",
    price: 8700, originalPrice: null, badge: null,
    colors: ["#c9c2b5", "#7a6b5a", "#2d2420"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Clean-cut chino with a slim taper and tailored front crease.",
    hue: "#d4ccbf",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-014", name: "Everyday Essential Tee", category: "men",
    price: 2500, originalPrice: null, badge: null,
    colors: ["#f7f5f1", "#1a1612", "#b07d62"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "The perfect weight. The perfect fit. The tee you reach for every time.",
    hue: "#ede8e0",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
  },
  // Sale
  {
    id: "p-015", name: "Wide Leg Denim", category: "sale",
    price: 8900, originalPrice: 14900, badge: "40% Off",
    colors: ["#4a5568", "#2d3748", "#c9c2b5"],
    sizes: ["XS", "S", "M", "L"],
    description: "Relaxed wide-leg denim with a high rise and clean finish.",
    hue: "#c4ccd8",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-016", name: "Denim Jacket", category: "sale",
    price: 7200, originalPrice: 14400, badge: "50% Off",
    colors: ["#4a5568", "#2d3748"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A classic denim jacket, reimagined with a slightly oversized cut.",
    hue: "#c0cad4",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
  },
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Amara K.",
    text: "Novella pieces are the ones I reach for when I want to feel put-together without trying. The quality is exceptional.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "Dilini R.",
    text: "I ordered three blouses and they all arrived beautifully packaged. The fabric is nothing like fast fashion — it actually drapes properly.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Sachini P.",
    text: "Finally a Sri Lankan brand that takes design seriously. The Office Slim Fit Pant fits like it was made for me.",
    rating: 5,
  },
  {
    id: "t-4",
    name: "Kasun M.",
    text: "Bought the Essential Tee and the Chino. Perfect fit, fast delivery. Already planning my next order.",
    rating: 5,
  },
];

export const PERKS = [
  { icon: "🚚", title: "Free Shipping", detail: "On all orders above Rs 7,000" },
  { icon: "↩️", title: "Easy Returns", detail: "Hassle-free returns within 30 days" },
  { icon: "🛡️", title: "Secure Payment", detail: "256-bit encrypted checkout" },
  { icon: "💬", title: "24/7 Support", detail: "We're always here for you" },
];
