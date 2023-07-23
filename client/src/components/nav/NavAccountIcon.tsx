import { useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export default function () {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogOutClose = () => {
    setAnchorEl(null);
    localStorage.removeItem("_id");
    localStorage.removeItem("userToken");
  };

  return (
    <div>
      <IconButton aria-haspopup="true" onClick={handleMenu}>
        <AccountCircleOutlinedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={"/login"}>
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>
        <Link to={"/my-profile"}>
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
        </Link>
        <Link to={"/my-orders"}>
          <MenuItem onClick={handleClose}>My Orders</MenuItem>
        </Link>
        <Link to={"/"}>
          <MenuItem onClick={handlelogOutClose}>LogOut</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
