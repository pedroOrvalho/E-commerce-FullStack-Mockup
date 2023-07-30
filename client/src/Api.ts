export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://backend-t7tx.onrender.com"
    : "http://localhost:4000";

export const FRONTEND_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://frontend-oltx.onrender.com"
    : "http://localhost:3000";
