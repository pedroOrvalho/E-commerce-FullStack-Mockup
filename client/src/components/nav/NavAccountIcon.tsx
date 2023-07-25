import { useState } from "react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export default function NavAccountIcon() {
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
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link className="nav_link" to={"/login"}>
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handleClose}
          >
            Login
          </MenuItem>
        </Link>
        <Link className="nav_link" to={"/my-profile"}>
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handleClose}
          >
            My Profile
          </MenuItem>
        </Link>
        <Link className="nav_link" to={"/my-orders"}>
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handleClose}
          >
            My Orders
          </MenuItem>
        </Link>
        <Link className="nav_link" to={"/"}>
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handlelogOutClose}
          >
            LogOut
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
