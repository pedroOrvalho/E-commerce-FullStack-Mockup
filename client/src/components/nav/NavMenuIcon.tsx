import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  anchorElNav: HTMLElement | null;
  setAnchorElNav: Dispatch<SetStateAction<HTMLElement | null>>;
};

export default function NavMenuIcon({ anchorElNav, setAnchorElNav }: Props) {
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "block" },
        }}
      >
        <Link className="nav_link" to="/">
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handleCloseNavMenu}
          >
            Home
          </MenuItem>
        </Link>
        <Link className="nav_link" to="/products">
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handleCloseNavMenu}
          >
            Shop
          </MenuItem>
        </Link>
        <Link className="nav_link" to="/workshops">
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handleCloseNavMenu}
          >
            Workshops
          </MenuItem>
        </Link>
        <Link className="nav_link" to="/about">
          <MenuItem
            sx={{ color: "hsla(0, 0%, 0%, 0.7)" }}
            onClick={handleCloseNavMenu}
          >
            About Us
          </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}
