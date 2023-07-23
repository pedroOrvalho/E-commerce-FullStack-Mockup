import { useDispatch } from "react-redux";

import CartQtySelect from "./CartQtySelect";
import { removeFromCart } from "../../redux/slices/cart";

import { TableRow, TableCell } from "@mui/material";

import { CartProduct } from "../../types/type";

import pict from "../../images/image_cc236329-c3df-4336-a3c7-f92d32061a1a_600x.webp";

type Props = {
  cartItem: CartProduct;
};

export default function CartTableBodyItem({ cartItem }: Props) {
  const dispatch = useDispatch();

  function removeFromCartHandler(cartItem: CartProduct) {
    dispatch(removeFromCart(cartItem));
  }

  return (
    <TableRow sx={{ height: "100px" }} className="cartItem_container" key={cartItem._id}>
      <TableCell
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)", height: "100px" }}
        className="cartItem_image_container"
      >
        <img src={pict} alt={cartItem.title} />
      </TableCell>
      <TableCell
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)", height: "100px" }}
        className="cartItem_info_container"
      >
        <div className="cartItem_info">
          <h1>{cartItem.title}</h1>
          <h2>{cartItem.category}</h2>
          <h3>{cartItem.color}</h3>
          <h3>{cartItem.material}</h3>
          <div className="cartItem_remove_container">
            <button onClick={() => removeFromCartHandler(cartItem)}>Delete</button>
          </div>
        </div>
      </TableCell>
      <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)", width: "100px" }} align="center">
        {cartItem.price}
      </TableCell>
      <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)", width: "75px" }} align="center">
        <CartQtySelect cartItem={cartItem} />
      </TableCell>
      <TableCell sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)", width: "75px" }} align="right">
        {(cartItem.price * cartItem.quantity).toFixed(2)}
      </TableCell>
    </TableRow>
  );
}