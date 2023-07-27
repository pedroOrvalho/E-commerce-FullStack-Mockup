import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addOrRemoveFromFavorites } from "../../redux/slices/favorites";
import { addToCart } from "../../redux/slices/cart";

import { Box } from "@mui/material";

import { Favorite } from "../../types/type";

type Props = {
  favorite: Favorite;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FavoritesListItem({ favorite, setState }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = (favorite: Favorite) => {
    dispatch(addToCart(favorite));
    dispatch(addOrRemoveFromFavorites(favorite));
  };

  return (
    <Box key={favorite._id} className="favoritesItem_container">
      <Box className="favoritesItem_image_container">
        <img src={favorite.image[0]} alt={favorite.title} />
      </Box>
      <Box className="favoritesItem_info_container">
        <Box className="favoritesInfo">
          <Link
            to={`/products/${favorite._id}`}
            onClick={() => setState(false)}
            className="favoritesInfo_Link"
          >
            <h3>{favorite.title}</h3>
          </Link>
          <h4>{favorite.color}</h4>
          <p>{favorite.price} €</p>
        </Box>
        <Box className="favoritesInfo_counter">
          <button onClick={() => handleAddToCart(favorite)}>Add to cart</button>
          <button onClick={() => dispatch(addOrRemoveFromFavorites(favorite))}>
            Delete
          </button>
        </Box>
      </Box>
    </Box>
  );
}
