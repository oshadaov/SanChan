import { useStore } from "../context/StoreContext";
import { tokens } from "../../config/tokens";

const StatCard = ({ title, value, icon, color }) => (
  <div
    style={{
      background: "#fff",
      padding: 24,
      borderRadius: 8,
      boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
      display: "flex",
      alignItems: "center",
      gap: 20,
    }}
  >
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: `${color}15`,
        color: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
      }}
    >
      {icon}
    </div>
    <div>
      <div style={{ color: tokens.colors.dust, fontSize: 13, marginBottom: 4 }}>
        {title}
      </div>
      <div style={{ fontSize: 28, fontWeight: 600, color: tokens.colors.ink }}>
        {value}
      </div>
    </div>
  </div>
);

export const Dashboard = () => {
  const { products, categories, slides, testimonials } = useStore();

  return (
    <div>
      <h1 style={{ fontFamily: tokens.fonts.display, margin: "0 0 32px" }}>
        Dashboard Overview
      </h1>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        <StatCard 
          title="Total Products" 
          value={products.length} 
          icon="👗" 
          color="#3b82f6" 
        />
        <StatCard 
          title="Active Categories" 
          value={categories.length} 
          icon="🏷️" 
          color="#8b5cf6" 
        />
        <StatCard 
          title="Hero Slides" 
          value={slides.length} 
          icon="🖼️" 
          color="#ec4899" 
        />
        <StatCard 
          title="Testimonials" 
          value={testimonials.length} 
          icon="💬" 
          color="#10b981" 
        />
      </div>
    </div>
  );
};
