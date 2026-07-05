import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { tokens } from "../../config/tokens";
import { Btn } from "../../components/common/Btn";

export const Products = () => {
  const { products, deleteProduct, addProduct, updateProduct, categories } = useStore();
  const [filter, setFilter] = useState("all");
  const [editing, setEditing] = useState(null);

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  const handleAddNew = () => {
    const newProduct = {
      name: "New Product",
      price: 100,
      category: categories[0]?.id || "new-in",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
      colors: ["#000"],
      sizes: ["S", "M", "L"],
      badge: "New",
    };
    addProduct(newProduct);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 style={{ fontFamily: tokens.fonts.display, margin: 0 }}>Products</h1>
        <Btn onClick={handleAddNew}>+ Add Product</Btn>
      </div>

      <div style={{ marginBottom: 24, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 14, color: tokens.colors.dust }}>Filter by category:</span>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "8px 16px",
            borderRadius: 4,
            border: `1px solid ${tokens.colors.stone}`,
            outline: "none",
          }}
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${tokens.colors.stone}`, background: "#fafafa" }}>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Image</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Name</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Category</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Price</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Badge</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => {
              const isEditing = editing === p.id;

              return (
                <tr key={p.id} style={{ borderBottom: `1px solid ${tokens.colors.stone}` }}>
                  <td style={{ padding: "16px 24px" }}>
                    <img src={p.image} alt="" style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4 }} />
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        value={p.name}
                        onChange={(e) => updateProduct(p.id, { name: e.target.value })}
                        style={{ padding: 4, width: "100%" }}
                      />
                    ) : (
                      <span style={{ fontWeight: 500 }}>{p.name}</span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <select
                        value={p.category}
                        onChange={(e) => updateProduct(p.id, { category: e.target.value })}
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.id}>{c.label}</option>
                        ))}
                      </select>
                    ) : (
                      <span style={{ fontSize: 13, background: tokens.colors.stone, padding: "4px 8px", borderRadius: 4 }}>
                        {categories.find(c => c.id === p.category)?.label || p.category}
                      </span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        type="number"
                        value={p.price}
                        onChange={(e) => updateProduct(p.id, { price: Number(e.target.value) })}
                        style={{ padding: 4, width: 80 }}
                      />
                    ) : (
                      `$${p.price}`
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        value={p.badge || ""}
                        onChange={(e) => updateProduct(p.id, { badge: e.target.value })}
                        style={{ padding: 4, width: 80 }}
                        placeholder="e.g. New"
                      />
                    ) : (
                      p.badge && <span style={{ fontSize: 11, color: tokens.colors.clay }}>{p.badge}</span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px", textAlign: "right" }}>
                    <button
                      onClick={() => setEditing(isEditing ? null : p.id)}
                      style={{ background: "none", border: "none", color: tokens.colors.ink, cursor: "pointer", marginRight: 12 }}
                    >
                      {isEditing ? "Save" : "Edit"}
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div style={{ padding: 40, textAlign: "center", color: tokens.colors.dust }}>
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};
