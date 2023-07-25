import CartTableBody from "./CartTableBody";
import CartTableHead from "./CartTableHead";

import { Box, Paper, Table, TableContainer, Typography } from "@mui/material";

export default function CartWithItems() {
  return (
    <Box flexGrow={1} sx={{ m: "2rem 3%" }}>
      <Box>
        <Typography
          component="h1"
          variant="h3"
          sx={{
            fontWeight: "400",
            letterSpacing: "0.2rem",
            color: "hsla(0, 0%, 9%, 0.729)",
            fontFamily: "jost, sans-serif",
            fontSize: "2rem",
            padding: 3,
          }}
        >
          Your Shopping Bag
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableContainer
          sx={{ border: "0" }}
          className="cartList_container"
          component={Paper}
          variant="outlined"
        >
          <Table>
            <CartTableHead />
            <CartTableBody />
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

/* <Box
      sx={{
        display: { md: "block", lg: "flex" },
        fontFamily: "jost, sans-serif",

      }}
    >
      <TableContainer
        sx={{ border: "0", m: "0rem 3%" }}
        className="cartList_container"
        component={Paper}
        variant="outlined"
      >
        <Box>
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: "400",
              letterSpacing: "0.2rem",
              color: "hsla(0, 0%, 9%, 0.729)",
              fontFamily: "jost, sans-serif",
              fontSize: "2rem",
              padding: 3,
            }}
          >
            Your Shopping Bag
          </Typography>
        </Box>
        <Table>
          <CartTableHead />
          <CartTableBody cart={cart} />
        </Table>
      </TableContainer>
      <CartCheckout />
    </Box> */
