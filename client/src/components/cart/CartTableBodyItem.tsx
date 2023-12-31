import { useDispatch } from "react-redux";

import CartQtySelect from "./CartQtySelect";
import { removeFromCart } from "../../redux/slices/cart";

import { TableRow, TableCell, Box } from "@mui/material";

import { CartProduct } from "../../types/type";

type Props = {
  cartItem: CartProduct;
};

export default function CartTableBodyItem({ cartItem }: Props) {
  const dispatch = useDispatch();

  function removeFromCartHandler(cartItem: CartProduct) {
    dispatch(removeFromCart(cartItem));
  }

  return (
    <TableRow className="cartItem_container">
      <TableCell className="cartItem_image_container">
        <img src={cartItem.image[0]} alt={cartItem.title} />
      </TableCell>
      <TableCell sx={{ pl: 0, pr: 0, minWidth: "215px" }}>
        <Box className="cartItem_info">
          <h1>{cartItem.title}</h1>
          <h2>{cartItem.category}</h2>
          <h3>{cartItem.color}</h3>
          <h3>{cartItem.material}</h3>
          <div className="cartItem_remove_container">
            <button onClick={() => removeFromCartHandler(cartItem)}>
              Delete
            </button>
          </div>
        </Box>
      </TableCell>
      <TableCell align="center">{cartItem.price}</TableCell>
      <TableCell sx={{ width: "75px" }} align="center">
        <CartQtySelect cartItem={cartItem} />
      </TableCell>
      <TableCell sx={{ width: "75px" }} align="right">
        {(cartItem.price * cartItem.quantity).toFixed(2)}
      </TableCell>
    </TableRow>
  );
}
