import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";

import ProductItem from "../components/Products/ProductItem";
import Search from "../components/Search";
import IsLoading from "../components/IsLoading";
import { fetchAllProducts } from "../redux/thunk/products";

import { Box } from "@mui/material";

import { Product } from "../types/type";

export default function Products() {
  const productList = useSelector(
    (state: RootState) => state.products.productsList
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const searchProductsList: Product[] = searchValue
    ? productList.filter(
        (product: Product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.category.toLowerCase().includes(searchValue.toLowerCase())
      )
    : productList;

  const sortedProductList = [...searchProductsList];
  if (sort === "Price Up") {
    sortedProductList.sort((a: Product, b: Product) => a.price - b.price);
  } else if (sort === "Price Down") {
    sortedProductList.sort((a: Product, b: Product) => b.price - a.price);
  } else if (sort === "Z-A") {
    sortedProductList.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort === "A-Z") {
    sortedProductList.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (isLoading) {
    return <IsLoading isLoading={isLoading} />;
  }
  return (
    <Box className="products_container">
      <Box className="product_banner_container">
        <h1>Collection</h1>
      </Box>

      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sort={sort}
        setSort={setSort}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
          gap: "100px 5%",
          ml: "5%",
          mr: "5%",
        }}
        className="productlist_map_container"
      >
        {sortedProductList.map((product: Product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
