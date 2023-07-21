import CartTableBodyItem from "./CartTableBodyItem";

import { TableBody } from "@mui/material";

import { CartProduct } from "../../types/type";

type CartProps = {
  cart: CartProduct[];
};

export default function CartTableBody({ cart }: CartProps) {
  return (
    <TableBody sx={{ height: "100px" }}>
      {cart.map((cartItem) => (
        <CartTableBodyItem cartItem={cartItem} />
      ))}
    </TableBody>
  );
}
