import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cart";

import { addOrRemoveFromFavorites } from "../../redux/slices/favorites";
import { RootState } from "../../redux/store";

import { Box, Button } from "@mui/material";

import { Favorite, Product } from "../../types/type";

type Props = {
  product: Product;
};

export default function ProductItemInfo({ product }: Props) {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesList
  );
  const isAlreadyFavorite = favorites.some(
    (favorite) => favorite._id === product._id
  );

  function handleFavorites(product: Favorite) {
    dispatch(addOrRemoveFromFavorites(product));
  }

  return (
    <Box
      sx={{
        minWidth: "570px",
        maxWidth: "670px",
      }}
    >
      <Box className="productDetail_info_header">
        <h2>{product.category}</h2>
        <h3>{product.title}</h3>
        <p>{product.price} €</p>
      </Box>
      <Box className="product_Detail_description">
        <p>{product.description}</p>
      </Box>
      <Box className="productDetail_info_color">
        <h4>Color:</h4>
        <p>{product.color}</p>
      </Box>
      <Box className="productDetail_info_material">
        <h4>Material:</h4>
        <p>{product.material}</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          ml: "10%",
          mr: "10%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "0",
            textTransform: "capitalize",
            letterSpacing: "0.2rem",
            fontSize: "1rem",
            bgcolor: "hsla(10, 47%, 67%, 0.957)",
            "&:hover": {
              bgcolor: "hsla(10, 47%, 77%, 0.957)",
            },
          }}
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        >
          add to cart
        </Button>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "0",
            textTransform: "capitalize",
            letterSpacing: "0.2rem",
            fontSize: "1rem",
            bgcolor: "hsla(10, 47%, 67%, 0.957)",
            "&:hover": {
              bgcolor: "hsla(10, 47%, 77%, 0.957)",
            },
          }}
          onClick={() => handleFavorites({ ...product, quantity: 1 })}
        >
          {isAlreadyFavorite ? "remove from favorites" : "add to favorites"}
        </Button>
      </Box>
    </Box>
  );
}
