import * as React from "react";
import { Link } from "react-router-dom";

import FavoritesDrawer from "../FavoritesDrawer";
import NavAccountIcon from "./NavAccountIcon";
import NavMenuIcon from "./NavMenuIcon";
import NavLinks from "./NavLinks";

import { Stack, ThemeProvider, createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          margin: 0,
          padding: 0,
          height: "4rem",
          backgroundColor: "hsla(144, 35%, 40%, 0.25)",
        }}
        maxWidth={false}
      >
        <Toolbar disableGutters sx={{ pl: "2%", pr: "2%" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", lg: "none" },
              width: 0,
            }}
          >
            <NavMenuIcon
              anchorElNav={anchorElNav}
              setAnchorElNav={setAnchorElNav}
            />
          </Box>
          <NavLinks />
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              width: "40%",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textAlign: "center",
                minWidth: "210px",
              }}
            >
              Terra Quente
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            spacing={2}
            width={"33%"}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <NavAccountIcon />
            <FavoritesDrawer />
            <Link to={"/cart"}>
              <IconButton>
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </ThemeProvider>
  );
}
