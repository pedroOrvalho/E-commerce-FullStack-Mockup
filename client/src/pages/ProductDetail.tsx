import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router-dom";

import { fetchProductById } from "../redux/thunk/products";
import { addOrRemoveFromFavorites } from "../redux/slices/favorites";
import ProductSlider from "../components/Products/ProductSlider";
import { Favorite } from "../types/type";
import { addToCart } from "../redux/slices/cart";

export default function ProductDetail() {
  const dispatchThunk = useDispatch<AppDispatch>();
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state: RootState) => state.products.product);
  const favorites = useSelector((state: RootState) => state.favorites.favoritesList);
  const isAlreadyFavorite = favorites.some((favorite) => favorite._id === product._id);

  useEffect(() => {
    dispatchThunk(fetchProductById(id));
  }, [id, dispatchThunk]);

  function handleFavorites(product: Favorite) {
    dispatch(addOrRemoveFromFavorites(product));
  }

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
          <button
            id="addToCart"
            className="productDetail_addToCart"
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            add to cart
          </button>
          <button
            id="addToFavorites"
            className="productDetail_addToCart"
            onClick={() => handleFavorites({ ...product, quantity: 1 })}
          >
            {isAlreadyFavorite ? "remove from favorites" : "add to favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
