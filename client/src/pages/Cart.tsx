import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import CartTableHead from "../components/cart/CartTableHead";
import CartTableBody from "../components/cart/CartTableBody";
import CartCheckout from "../components/cart/CartCheckout";

import { Box, Paper, Table, TableContainer } from "@mui/material";

export default function Cart() {
  const cart = useSelector(({ cart }: RootState) => cart.cart);

  if (cart.length === 0) {
    return (
      <div className="cart_noItems_container">
        <Box sx={{ margin: "40px 20px" }}>
          <Box
            sx={{
              fontWeight: "500",
              letterSpacing: "0.2rem",
              color: "hsla(0, 0%, 9%, 0.729)",
              width: "900px",
            }}
          >
            <h1>Your Shopping Bag</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
              borderTop: "1px solid rgba(0, 0, 0, 0.3)",
              height: "350px",
            }}
          >
            <h2>Your shopping bag is empty.</h2>
          </Box>
        </Box>
        <CartCheckout />
      </div>
    );
  }
  return (
    <div className="cart_container">
      <TableContainer
        sx={{ border: "0" }}
        className="cartList_container"
        component={Paper}
        variant="outlined"
      >
        <Box>
          <h1>Your Shopping Bag</h1>
        </Box>
        <Table>
          <CartTableHead />
          <CartTableBody cart={cart} />
        </Table>
      </TableContainer>
      <CartCheckout />
    </div>
  );
}
