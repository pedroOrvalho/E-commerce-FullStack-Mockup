import { Box, Typography } from "@mui/material";
import { CartProduct } from "../types/type";

type Props = {
  productItem: CartProduct;
};

export default function OrderProductsList({ productItem }: Props) {
  return (
    <Box sx={{m:5}}>
      <Box>
        <Typography>{productItem.title}</Typography>
        <Typography>{productItem.price}</Typography>
        <Typography>{productItem.quantity}</Typography>
        <Typography>{productItem.color}</Typography>
      </Box>
    </Box>
  );
}
