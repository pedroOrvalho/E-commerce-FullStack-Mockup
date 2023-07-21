import { Link } from "react-router-dom";

import FavoritesDrawer from "./FavoritesDrawer";

import { Box, Stack, IconButton, Paper } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Nav() {
  return (
    <Paper>
      <div className="nav_container">
        <Stack sx={{ marginLeft: "3rem", height: "4rem" }} direction={"row"} spacing={3}>
          <Link className="nav_link" to="/">
            <IconButton disableFocusRipple style={{ backgroundColor: "transparent", height: "4rem" }}>
              <p>Home</p>
            </IconButton>
          </Link>
          <Link className="nav_link" to="/products">
            <IconButton disableFocusRipple style={{ backgroundColor: "transparent", height: "4rem" }}>
              <p>Shop</p>
            </IconButton>
          </Link>
          <Link className="nav_link" to="/workshops">
            <IconButton disableFocusRipple style={{ backgroundColor: "transparent", height: "4rem" }}>
              <p>Workshops</p>
            </IconButton>
          </Link>
          <Link className="nav_link" to="/about">
            <IconButton disableFocusRipple style={{ backgroundColor: "transparent", height: "4rem" }}>
              <p>About</p>
            </IconButton>
          </Link>
        </Stack>
        <Box sx={{ marginLeft: "-18rem" }}>
          <h1>Terra Quente</h1>
        </Box>
        <Stack sx={{ marginRight: "3rem" }} direction={"row"} spacing={2}>
          <Link to={"/login"}>
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Link>
          <FavoritesDrawer />
          <Link to={"/cart"}>
            <IconButton>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Link>
        </Stack>
      </div>
    </Paper>
  );
}
