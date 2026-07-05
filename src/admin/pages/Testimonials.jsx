import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { tokens } from "../../config/tokens";
import { Btn } from "../../components/common/Btn";
import { StarRating } from "../../components/common/StarRating";

export const Testimonials = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useStore();
  const [editing, setEditing] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      deleteTestimonial(id);
    }
  };

  const handleAddNew = () => {
    addTestimonial({
      name: "New Customer",
      text: "This is a great product!",
      rating: 5,
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 style={{ fontFamily: tokens.fonts.display, margin: 0 }}>Testimonials</h1>
        <Btn onClick={handleAddNew}>+ Add Testimonial</Btn>
      </div>

      <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${tokens.colors.stone}`, background: "#fafafa" }}>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13, width: 120 }}>Rating</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Review</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13 }}>Customer Name</th>
              <th style={{ padding: "16px 24px", fontWeight: 500, color: tokens.colors.dust, fontSize: 13, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t) => {
              const isEditing = editing === t.id;

              return (
                <tr key={t.id} style={{ borderBottom: `1px solid ${tokens.colors.stone}` }}>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={t.rating}
                        onChange={(e) => updateTestimonial(t.id, { rating: Number(e.target.value) })}
                        style={{ padding: 4, width: 60 }}
                      />
                    ) : (
                      <StarRating n={t.rating} />
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <textarea
                        value={t.text}
                        onChange={(e) => updateTestimonial(t.id, { text: e.target.value })}
                        style={{ padding: 8, width: "100%", minHeight: 60, fontFamily: tokens.fonts.body, fontSize: 14 }}
                      />
                    ) : (
                      <span style={{ fontSize: 14, fontStyle: "italic", color: tokens.colors.ink }}>"{t.text}"</span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px" }}>
                    {isEditing ? (
                      <input
                        value={t.name}
                        onChange={(e) => updateTestimonial(t.id, { name: e.target.value })}
                        style={{ padding: 4, width: "100%" }}
                      />
                    ) : (
                      <span style={{ fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>{t.name}</span>
                    )}
                  </td>
                  <td style={{ padding: "16px 24px", textAlign: "right", verticalAlign: "top" }}>
                    <button
                      onClick={() => setEditing(isEditing ? null : t.id)}
                      style={{ background: "none", border: "none", color: tokens.colors.ink, cursor: "pointer", marginRight: 12 }}
                    >
                      {isEditing ? "Save" : "Edit"}
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
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
        {testimonials.length === 0 && (
          <div style={{ padding: 40, textAlign: "center", color: tokens.colors.dust }}>
            No testimonials found.
          </div>
        )}
      </div>
    </div>
  );
};
