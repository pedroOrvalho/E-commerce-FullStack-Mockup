import { Link } from "react-router-dom";

import { Box, Stack, IconButton, Paper } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Nav() {
  return (
    <Paper>
      <div className="nav_container">
        <Stack sx={{ marginLeft: "5rem" }} direction={"row"} spacing={1}>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/products">
            <button>Shop</button>
          </Link>
          <button>Events</button>
          <button>About</button>
        </Stack>
        <Box sx={{ marginLeft: "-3rem" }}>
          <h1>Terra Quente</h1>
        </Box>
        <Stack sx={{ marginRight: "5rem" }} direction={"row"} spacing={1}>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </Stack>
      </div>
    </Paper>
  );
}
