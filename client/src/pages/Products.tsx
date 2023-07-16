import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";

import ProductItem from "../components/Products/ProductItem";
import Search from "../components/Search";

import { fetchAllProducts } from "../redux/thunk/products";

import { Product } from "../types/type";

export default function Products() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const productList = useSelector(
    (state: RootState) => state.products.productsList
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="products_container">
      <div className="product_banner_container">
        <h1>Collection</h1>
      </div>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sort={sort}
        setSort={setSort}
      />
      <div className="productlist_container">
        <div>
          <ul>
            <li>Vases</li>
            <li>Cups</li>
            <li>Plates</li>
          </ul>
        </div>
        <div className="productlist_map_container">
          {productList.map((product: Product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
