import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProductById } from "../redux/thunk/products";
import { useParams } from "react-router-dom";

import productImage from "../images/image_cc236329-c3df-4336-a3c7-f92d32061a1a_600x.webp";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.products.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);
  
  return (
    <div>
      <img src={productImage} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}
