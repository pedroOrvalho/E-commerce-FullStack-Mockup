import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProductById } from "../redux/thunk/products";
import { useParams } from "react-router-dom";

import ProductSlider from "../components/Products/ProductSlider";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.products.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  return (
    <div className="productDetail_container">
      <div className="productDetail_slider_container">
        <ProductSlider product={product} />
      </div>
      <div className="productDetail_info_container">
        <div className="productDetail_info_header">
          <h2>{product.category}</h2>
          <h3>{product.title}</h3>
          <p>{product.price} €</p>
        </div>
        <div className="product_Detail_description">
          <p>{product.description}</p>
        </div>
        <div className="productDetail_info_color">
          <h4>Color:</h4>
          <p>{product.color}</p>
        </div>
        <div className="productDetail_info_material">
          <h4>Material:</h4>
          <p>{product.material}</p>
        </div>
        <div className="productDetail_buttons">
          <button id="addToCart" className="productDetail_addToCart" >
            add to cart
          </button>
          <button id="addToFavorites" className="productDetail_addToCart" >
            add to favorites
          </button>
        </div>
      </div>
    </div>
  );
}
