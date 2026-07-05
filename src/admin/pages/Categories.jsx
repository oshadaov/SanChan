import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { tokens } from "../../config/tokens";
import { Btn } from "../../components/common/Btn";

export const Categories = () => {
  const { categories, addCategory, updateCategory, deleteCategory } = useStore();
  const [editing, setEditing] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(id);
    }
  };

  const handleAddNew = () => {
    addCategory({
      id: `new-${Date.now()}`,
      label: "New Category",
      icon: "✨",
      count: "0 items",
      href: "/category/new",
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 style={{ fontFamily: tokens.fonts.display, margin: 0 }}>Categories</h1>
        <Btn onClick={handleAddNew}>+ Add Category</Btn>
      </div>

      <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${tokens.colors.stone}`, background: "#fafafa" }}>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13, width: 60 }}>Icon</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>ID / URL Path</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Label</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Count Text</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => {
              const isEditing = editing === c.id;

              return (
                <tr key={c.id} style={{ borderBottom: `1px solid ${tokens.colors.stone}` }}>
                  <td style={{ padding: "16px 24px", fontSize: 24 }}>
                    {isEditing ? (
                      <input
                        value={c.icon}
                        onChange={(e) => updateCategory(c.id, { icon: e.target.value })}
                        style={{ padding: 4, width: 40, textAlign: "center" }}
                      />
                    ) : (
                      c.icon
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        value={c.id}
                        onChange={(e) => updateCategory(c.id, { id: e.target.value, href: `/category/${e.target.value}` })}
                        style={{ padding: 4, width: "100%" }}
                      />
                    ) : (
                      <span style={{ fontFamily: "monospace", fontSize: 13, color: tokens.colors.dust }}>{c.id}</span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        value={c.label}
                        onChange={(e) => updateCategory(c.id, { label: e.target.value })}
                        style={{ padding: 4, width: "100%" }}
                      />
                    ) : (
                      <span style={{ fontWeight: 500 }}>{c.label}</span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        value={c.count}
                        onChange={(e) => updateCategory(c.id, { count: e.target.value })}
                        style={{ padding: 4, width: "100%" }}
                      />
                    ) : (
                      <span style={{ color: tokens.colors.dust, fontSize: 13 }}>{c.count}</span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px", textAlign: "right" }}>
                    <button
                      onClick={() => setEditing(isEditing ? null : c.id)}
                      style={{ background: "none", border: "none", color: tokens.colors.ink, cursor: "pointer", marginRight: 12 }}
                    >
                      {isEditing ? "Save" : "Edit"}
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
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
        {categories.length === 0 && (
          <div style={{ padding: 40, textAlign: "center", color: tokens.colors.dust }}>
            No categories found.
          </div>
        )}
      </div>
    </div>
  );
};
