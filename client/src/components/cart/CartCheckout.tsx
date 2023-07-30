import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { RootState } from "../../redux/store";
import { BASE_URL } from "../../Api";

import { Box, Button, Typography } from "@mui/material";

export default function CartCheckout() {
  const cart = useSelector(({ cart }: RootState) => cart.cart);
  const userId = localStorage.getItem("_id");
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  const total = cart.reduce<number>((accumulator, current) => {
    const productTotal = current.price * current.quantity;
    return accumulator + productTotal;
  }, 0);

  function onClickHandler() {
    const endpoint = `${BASE_URL}/orders/${userId}`;
    axios
      .post(endpoint, cart, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Thanks for shopping with us");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please log in to make place order");
          navigate("/login");
          return;
        }
      });
  }

  return (
    <Box flexGrow={0} sx={{ m: "2rem 3%", minWidth: "25rem" }}>
      <Box
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            fontWeight: "400",
            letterSpacing: "0.2rem",
            color: "hsla(0, 0%, 9%, 0.729)",
            fontFamily: "jost, sans-serif",
            fontSize: "2rem",
            pt: 3,
            pb: 3,
          }}
        >
          Summary
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{
                fontWeight: "300",
                letterSpacing: "0.2rem",
                color: "hsla(0, 0%, 0%, 8)",
                fontFamily: "jost, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Subtotal
            </Typography>
            <Typography
              component="h2"
              variant="h6"
              sx={{
                fontWeight: "300",
                letterSpacing: "0.2rem",
                color: "hsla(0, 0%, 0%, 8)",
                fontFamily: "jost, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Shipping
            </Typography>
            <Typography
              component="h2"
              variant="h6"
              sx={{
                fontWeight: "300",
                letterSpacing: "0.2rem",
                color: "hsla(0, 0%, 9%, 8)",
                fontFamily: "jost, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              Tax
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              mt: 3,
              mb: 3,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{
                fontWeight: "300",
                letterSpacing: "0.2rem",
                color: "hsla(0, 0%, 0%, 0.8)",
                fontFamily: "jost, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              {total} €
            </Typography>
            <Typography
              component="h2"
              variant="h6"
              sx={{
                fontWeight: "300",
                letterSpacing: "0.2rem",
                color: "hsla(0, 0%, 0%, 0.8)",
                fontFamily: "jost, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              TBD
            </Typography>
            <Typography
              component="h2"
              variant="h6"
              sx={{
                fontWeight: "300",
                letterSpacing: "0.2rem",
                color: "hsla(0, 0%, 0%, 0.8)",
                fontFamily: "jost, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              %23
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 4,
            pb: 4,
          }}
        >
          <Typography
            component="h2"
            variant="h6"
            sx={{
              fontWeight: "500",
              letterSpacing: "0.2rem",
              color: "hsla(0, 0%, 0%, 1)",
              fontFamily: "jost, sans-serif",
              fontSize: "1.2rem",
            }}
          >
            Estimated Total
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            sx={{
              fontWeight: "500",
              letterSpacing: "0.2rem",
              color: "hsla(0, 0%, 0%, 1)",
              fontFamily: "jost, sans-serif",
              fontSize: "1.2rem",
            }}
          >
            {(total + 0.23 * total).toFixed(2)} €
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: "0",
              textTransform: "capitalize",
              letterSpacing: "0.2rem",
              fontSize: "1rem",
              bgcolor: "hsla(0, 0%, 0%, 1)",
              "&:hover": {
                bgcolor: "hsla(0, 0%, 0%, 0.8)",
              },
            }}
            onClick={onClickHandler}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
