import { Box, Typography } from "@mui/material";

export default function EmptyCart() {
  return (
    <Box flexGrow={1} sx={{ m: "2rem 3%" }}>
      <Box>
        <Typography
          component="h1"
          variant="h3"
          sx={{
            fontWeight: "400",
            letterSpacing: "0.2rem",
            color: "hsla(0, 0%, 9%, 0.729)",
            fontFamily: "jost, sans-serif",
            fontSize: "2rem",
            padding: 3,
          }}
        >
          Your Shopping Bag
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          height: "350px",
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{
            fontWeight: "400",
            letterSpacing: "0.2rem",
            color: "hsla(0, 0%, 9%, 0.729)",
            fontFamily: "jost, sans-serif",
          }}
        >
          Your shopping bag is empty.
        </Typography>
      </Box>
    </Box>
  );
}
