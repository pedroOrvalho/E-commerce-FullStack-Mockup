import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { addOrRemoveFromFavorites } from "../redux/slices/favorites";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import pict from "../images/ceramic-gba0ffcf60_1280.jpg";
import { addToCart } from "../redux/slices/cart";
import { Favorite } from "../types/type";

export default function FavoritesDrawer() {
  const [state, setState] = React.useState(false);
  const favoriteList = useSelector((state: RootState) => state.favorites.favoritesList);
  const dispatch = useDispatch();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleAddToCart = (favorite: Favorite) => {
    dispatch(addToCart(favorite));
    dispatch(addOrRemoveFromFavorites(favorite));
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <FavoriteBorderOutlinedIcon />
      </IconButton>

      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: "400px",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List className="favoritesDrawer_container" sx={{ padding: "0 0", width: "400px" }}>
            <div>
              <h1>Favorites</h1>
            </div>
            <Divider />
            <div className="favoritesList_container">
              {favoriteList.map((favorite) => (
                <div key={favorite._id} className="favoritesItem_container">
                  <div className="favoritesItem_image_container">
                    <img src={pict} alt={favorite.title} />
                  </div>
                  <div className="favoritesItem_info_container">
                    <div className="favoritesInfo">
                      <Link
                        to={`/products/${favorite._id}`}
                        onClick={() => setState(false)}
                        className="favoritesInfo_Link"
                      >
                        <h3>{favorite.title}</h3>
                      </Link>
                      <h4>{favorite.color}</h4>
                      <p>{favorite.price} €</p>
                    </div>
                    <div className="favoritesInfo_counter">
                      <button onClick={() => handleAddToCart(favorite)}>Add to cart</button>
                      <button onClick={() => dispatch(addOrRemoveFromFavorites(favorite))}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
