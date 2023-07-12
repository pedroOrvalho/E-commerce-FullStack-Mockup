import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import ProductItem from "../components/Products/ProductItem";

import { Product } from "../types/type";
import { useEffect } from "react";
import { fetchAllProducts } from "../redux/thunk/products";

export default function Products() {
  const productList = useSelector(
    (state: RootState) => state.products.productsList
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>products</h1>
      <div className="productlist_container">
        {productList.map((product: Product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
