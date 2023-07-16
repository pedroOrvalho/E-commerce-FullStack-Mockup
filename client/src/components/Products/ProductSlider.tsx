import SimpleImageSlider from "react-simple-image-slider";

import { Product } from "../../types/type";

type ProductSliderProps = {
  product: Product;
};

export default function ProductSlider({ product }: ProductSliderProps) {
  const productImages = product.image;

  return (
    <div className="product_slider">
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
    </div>
  );
}
