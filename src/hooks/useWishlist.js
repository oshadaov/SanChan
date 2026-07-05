import { useState } from "react";

export function useWishlist() {
  const [ids, setIds] = useState(new Set());

  const toggle = (id) => {
    setIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return { ids, toggle };
}
