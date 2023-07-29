import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      className="homepage_container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "400",
          letterSpacing: "0.2rem",
          color: "hsla(0, 0%, 9%, 0.729)",
          fontFamily: "jost, sans-serif",
          fontSize: "5rem",
          pt: 3,
          pb: 3,
        }}
      >
        Unearth the Beauty of Handcrafted Pottery
      </Typography>
      <Link className="link" to={"/products"}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "400",
            letterSpacing: "0.2rem",
            color: "hsla(12, 2%, 0%, 0.85)",
            fontFamily: "jost, sans-serif",
            fontSize: "5rem",
            pt: "7%",
            pb: 1,
            borderBottom: "4px solid hsla((163,160,78, 0.7)",
          }}
        >
          Explore our Collections
        </Typography>
      </Link>
    </Box>
  );
}
