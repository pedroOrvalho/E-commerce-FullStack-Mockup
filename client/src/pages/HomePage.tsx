import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import backgroundImage from "../images/chloe-bolton-R0qthXq3jec-unsplash.jpg";

export default function HomePage() {
  return (
    <Box
      sx={{
        height: "48rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Box
        sx={{
          height: "100%",
          p: "5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ pb: 6, textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "600",
              letterSpacing: "0.2rem",
              color: "hsla(0, 0%, 9%, 0.729)",
              fontFamily: "jost, sans-serif",
              fontSize: "3rem",
            }}
          >
            Unearth the Beauty of Handcrafted Pottery
          </Typography>
        </Box>
        <Box sx={{ pt: 6, textAlign: "center", maxWidth: "45rem" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              letterSpacing: "0.2rem",
              color: "hsla(35, 39%, 9%, 0.729)",
              fontFamily: "jost, sans-serif",
              fontSize: "2rem",
            }}
          >
            Discover the Timeless Artistry and Elegant Craftsmanship of
            Handcrafted Pottery Creations
          </Typography>
        </Box>
        <Box
          sx={{
            pr: "10%",
            pl: "10%",
            pt: "7%",
            pb: "10%",
            textAlign: "center",
          }}
        >
          <Link className="link" to="/products">
            <Button
              variant="contained"
              sx={{
                bgcolor: "hsla(10, 47%, 67%, 0.957)",
                "&:hover": {
                  bgcolor: "hsla(10, 47%, 77%, 0.957)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  letterSpacing: "0.4rem",
                  fontFamily: "jost, sans-serif",
                  p: 1,
                }}
              >
                Explore our Collections
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
