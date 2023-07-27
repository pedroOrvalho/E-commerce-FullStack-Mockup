import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import NoFavoritesDrawer from "./NoFavoritesDrawer";
import FavoritesCheckout from "./FavoritesCheckout";
import FavoritesListItem from "./FavoritesListItem";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Badge, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function FavoritesDrawer() {
  const [state, setState] = useState(false);
  const favoriteList = useSelector(
    (state: RootState) => state.favorites.favoritesList
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  if (favoriteList.length === 0) {
    return <NoFavoritesDrawer state={state} setState={setState} />;
  }
  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <Badge variant="dot" badgeContent={favoriteList.length} color="error">
          <FavoriteBorderOutlinedIcon />
        </Badge>
      </IconButton>

      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <Box className="favoritesDrawer_container">
            <h1>Favorites</h1>
          </Box>
          <List
            className="favoritesDrawer_container"
            sx={{ padding: "0 0", width: "400px", flex: 1 }}
          >
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              className="favoritesList_container"
            >
              {favoriteList.map((favorite) => (
                <FavoritesListItem favorite={favorite} setState={setState} />
              ))}
            </Box>
          </List>
          <Box sx={{ height: "10rem" }}>
            <FavoritesCheckout />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
