import SimpleImageSlider from "react-simple-image-slider";

import { Box } from "@mui/material";

import { Product } from "../../types/type";

type ProductSliderProps = {
  product: Product;
};

export default function ProductSlider({ product }: ProductSliderProps) {
  const productImages = product.image;

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <SimpleImageSlider
        width={570}
        height={570}
        images={productImages}
        showBullets={true}
        showNavs={true}
        navSize={30}
        navMargin={20}
        useGPURender={true}
      />
    </Box>
  );
}
