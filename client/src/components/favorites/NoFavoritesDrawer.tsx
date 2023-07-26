import {
  Box,
  IconButton,
  Drawer,
  List,
  Divider,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoritesCheckout from "./FavoritesCheckout";

type Props = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NoFavoritesDrawer({ state, setState }: Props) {
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

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <IconButton onClick={toggleDrawer(true)}>
        <FavoriteBorderOutlinedIcon />
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography component={"h1"}>No favorites added yet</Typography>
            </Box>
            <Divider />
          </List>
          <Box sx={{ height: "10rem" }}>
            <FavoritesCheckout />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
