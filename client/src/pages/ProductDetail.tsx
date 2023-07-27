import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { AppDispatch, RootState } from "../redux/store";
import ProductSlider from "../components/Products/ProductSlider";
import ProductItemInfo from "../components/Products/ProductItemInfo";
import { fetchProductById } from "../redux/thunk/products";
import IsLoading from "../components/IsLoading";

import { Box } from "@mui/material";

export default function ProductDetail() {
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const product = useSelector((state: RootState) => state.products.product);
  const dispatchThunk = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatchThunk(fetchProductById(id));
  }, [id, dispatchThunk]);

  if (isLoading) {
    return <IsLoading isLoading={isLoading} />;
  }
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
