import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import IsLoading from "../IsLoading";

import { Box } from "@mui/material";
import { Product } from "../../types/type";

type ProductSliderProps = {
  product: Product;
};

export default function ProductSlider({ product }: ProductSliderProps) {
  const productImages = product.image;
  const [imagesLoading, setImagesLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoading(false);
    }, 500);
  }, []);

  if (imagesLoading) {
    return <IsLoading isLoading={imagesLoading} />;
  }
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
