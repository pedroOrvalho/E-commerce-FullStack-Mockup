import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateProductQty } from "../../redux/slices/cart";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { CartProduct } from "../../types/type";

type CartQuantitySelectProps = {
  cartItem: CartProduct;
};

export default function CartQuantitySelect({ cartItem }: CartQuantitySelectProps) {
  const [qty, setQty] = useState<number>(cartItem.quantity);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const newQuantity = parseInt(event.target.value);
    setQty(newQuantity);
  };

  const newCartItemQty = { ...cartItem, quantity: qty };
  dispatch(updateProductQty(newCartItemQty));

  return (
    <FormControl
      sx={{
        maxWidth: 120,
        "& .MuiInputLabel-root": {
          color: "black",
          "&.Mui-focused": {
            color: "black",
          },
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "inherit",
            borderWidth: 1,
          },
          "&.Mui-focused fieldset": {
            borderColor: "inherit",
            borderWidth: 1,
          },
        },
      }}
      size="small"
    >
      <Select value={qty.toString()} onChange={handleChange}>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </FormControl>
  );
}
