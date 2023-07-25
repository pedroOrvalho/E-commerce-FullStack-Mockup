import { Link } from "react-router-dom";

import { Stack, IconButton } from "@mui/material";

export default function NavLinks() {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "none", lg: "flex" },
        width: "33%",
        minWidth: "450px",
      }}
    >
      <Link className="nav_link" to="/">
        <IconButton
          disableFocusRipple
          style={{ backgroundColor: "transparent", height: "4rem" }}
        >
          <p>Home</p>
        </IconButton>
      </Link>
      <Link className="nav_link" to="/products">
        <IconButton
          disableFocusRipple
          style={{ backgroundColor: "transparent", height: "4rem" }}
        >
          <p>Shop</p>
        </IconButton>
      </Link>
      <Link className="nav_link" to="/workshops">
        <IconButton
          disableFocusRipple
          style={{ backgroundColor: "transparent", height: "4rem" }}
        >
          <p>Workshops</p>
        </IconButton>
      </Link>
      <Link className="nav_link" to="/about">
        <IconButton
          disableFocusRipple
          style={{ backgroundColor: "transparent", height: "4rem" }}
        >
          <p>About Us</p>
        </IconButton>
      </Link>
    </Stack>
  );
}
