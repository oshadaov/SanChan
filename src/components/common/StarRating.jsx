import { tokens } from "../../config/tokens";

export const StarRating = ({ n }) => (
  <div style={{ color: tokens.colors.clay, fontSize: 14, letterSpacing: 1 }}>
    {"★".repeat(n)}{"☆".repeat(5 - n)}
  </div>
);
