import { Link } from "react-router-dom";

import productImage from "../../images/image_cc236329-c3df-4336-a3c7-f92d32061a1a_600x.webp";

import { Product } from "../../types/type";

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  console.log(product._id)
  return (
    <div className="product_container">
      <Link to={`/products/${product._id}`}>
        <img src={productImage} alt={product.title} width={"450px"} />
      </Link>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}
