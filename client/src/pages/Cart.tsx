import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import CartCheckout from "../components/cart/CartCheckout";

import { Box } from "@mui/material";
import EmptyCart from "../components/cart/EmptyCart";
import CartWithItems from "../components/cart/CartWithItems";

export default function Cart() {
  const cart = useSelector(({ cart }: RootState) => cart.cart);

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          display: { md: "block", lg: "flex" },
          fontFamily: "jost, sans-serif",
          mb: 12,
          mt: 3,
        }}
      >
        <EmptyCart />
        <CartCheckout />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: { md: "block", lg: "flex" },
        fontFamily: "jost, sans-serif",
        mb: 12,
        mt: 5,
      }}
    >
      <CartWithItems />
      <CartCheckout />
    </Box>
  );
}
