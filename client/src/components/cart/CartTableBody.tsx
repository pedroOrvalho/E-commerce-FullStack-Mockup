import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import CartTableBodyItem from "./CartTableBodyItem";

import { TableBody } from "@mui/material";

export default function CartTableBody() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <TableBody
      sx={{
        borderTop: "2px solid hsla(0, 0%, 0%, 0.4)",
        borderBottom: "2px solid hsla(0, 0%, 0%, 0.4)",
      }}
    >
      {cart.map((cartItem) => (
        <CartTableBodyItem key={cartItem._id} cartItem={cartItem} />
      ))}
    </TableBody>
  );
}
