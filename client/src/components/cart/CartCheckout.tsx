import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { Box } from "@mui/material";

export default function CartCheckout() {
  const cart = useSelector(({ cart }: RootState) => cart.cart);

  return (
    <Box className="checkout_container">
      <Box
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          borderTop: "1px solid rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1>Summary</h1>
      </Box>
      <Box
        sx={{
          height: "350px",
          display: "flex",
          flexDirection: "column",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="checkout_subtotal_info">
            <h2>Subtotal</h2>
            <p>Shipping</p>
            <p>Tax</p>
          </div>
          <div className="checkout_subtotal_values">
            <h2>1002 €</h2>
            <p>TBD</p>
            <p>%23</p>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>Estimated Total</h2>
          <h2>1090.4 €</h2>
        </Box>
        <Box
          sx={{
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          <button>Checkout</button>
        </Box>
      </Box>
    </Box>
  );
}
