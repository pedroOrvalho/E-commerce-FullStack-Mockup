import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box className="homepage_container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: 20,
          pb: 10,
          pl: "10%",
          pr: "10%",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              letterSpacing: "0.2rem",
              color: "hsla(0, 0%, 9%, 0.729)",
              fontFamily: "jost, sans-serif",
              fontSize: "3rem",
              pb: 4,
            }}
          >
            Unearth the Beauty of Handcrafted Pottery
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "400",
              letterSpacing: "0.2rem",
              color: "hsla(0, 0%, 9%, 0.729)",
              fontFamily: "jost, sans-serif",
              fontSize: "2rem",
              pt: 4,
            }}
          >
            Discover Artistry and Elegance in Every Piece{" "}
          </Typography>
        </Box>
        <Link className="link" to="/products">
          <Box sx={{ pt: 7, display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "700",
                letterSpacing: "0.4rem",
                fontFamily: "jost, sans-serif",
                fontSize: "2.5rem",
                borderBottom: "4px solid hsla(79, 43%, 28%, 0.85)",
                color: "hsla(79, 43%, 28%, 0.85)",
         
              }}
            >
              Explore our Collections
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
