import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router-dom";

import ProductSlider from "../components/Products/ProductSlider";
import ProductItemInfo from "../components/Products/ProductItemInfo";
import { fetchProductById } from "../redux/thunk/products";

import { Box } from "@mui/material";

export default function ProductDetail() {
  const dispatchThunk = useDispatch<AppDispatch>();
  const { id } = useParams();
  const product = useSelector((state: RootState) => state.products.product);

  useEffect(() => {
    dispatchThunk(fetchProductById(id));
  }, [id, dispatchThunk]);

  return (
    <Box
      flexGrow={1}
      sx={{
        display: {
          sx: "block",
          md: "block",
          lg: "flex",
        },
        fontFamily: "jost, sans-serif",
        letterSpacing: "0.2rem",
        mr: "2%",
        ml: "2%",
        mt: 10,
        mb: 10,
        justifyContent: "center",
      }}
    >
      <Box sx={{ p: 4 }}>
        <ProductSlider product={product} />
      </Box>
      <Box
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ProductItemInfo product={product} />
      </Box>
    </Box>
  );
}
