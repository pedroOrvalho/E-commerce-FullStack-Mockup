import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

import { Box, Button, Typography } from "@mui/material";

export default function FavoritesCheckout() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <Box sx={{ m: 3 }}>
      <Typography component={"h6"} sx={{ color: "hsla(0, 0%, 0%, 0.6)" }}>
        You have <em>{cart.length}</em> in your shopping bag
      </Typography>
      <Link to="/cart">
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "0",
            textTransform: "capitalize",
            letterSpacing: "0.2rem",
            fontSize: "1rem",
            bgcolor: "hsla(0, 0%, 0%, 1)",
            "&:hover": {
              bgcolor: "hsla(0, 0%, 0%, 0.8)",
            },
          }}
        >
          Checkout
        </Button>
      </Link>
    </Box>
  );
}
