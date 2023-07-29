import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderById } from "../redux/thunk/order";
import { Link, useNavigate, useParams } from "react-router-dom";
import IsLoading from "../components/IsLoading";

export default function OrderDetail() {
  const order = useSelector((state: RootState) => state.order.order);
  const isLoading = useSelector((state: RootState) => state.order.isLoading);
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("userToken");

  const total = order.productList.reduce<number>((accumulator, current) => {
    const productTotal = current.price * current.quantity;
    return accumulator + productTotal;
  }, 0);

  const dispatchThunk = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatchThunk(fetchOrderById(id, token, navigate));
  }, [dispatchThunk, id, navigate, token]);

  if (isLoading) {
    return <IsLoading isLoading={isLoading} />;
  }
  return (
    <Box sx={{ m: 5 }}>
      <Box>
        <Typography
          sx={{
            fontFamily: "jost, sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.3rem",
            fontWeight: 500,
            color: "hsla(0, 0%,0%, 0.75)",
            p: 2,
            pb: 0,
            display: "flex",
          }}
        >
          Order n°:
          <Typography
            sx={{
              mt: "5px",
              ml: 1,
              fontFamily: "jost, sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.2rem",
              fontWeight: 500,
              color: "hsla(0, 0%,0%, 0.75)",
            }}
          >
            {order._id}
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontFamily: "jost, sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.3rem",
            fontWeight: 500,
            color: "hsla(0, 0%,0%, 0.75)",
            pl: 2,
            pr: 2,
            display: "flex",
          }}
        >
          Order placed:
          <Typography
            sx={{
              mt: "5px",
              ml: 1,
              fontFamily: "jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3rem",
              fontWeight: 500,
              color: "hsla(0, 0%,0%, 0.75)",
            }}
          >
            {new Date(order.createdAt).toLocaleDateString()}
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontFamily: "jost, sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.3rem",
            fontWeight: 500,
            color: "hsla(0, 0%,0%, 0.75)",
            p: 2,
            pt: 0,
            display: "flex",
          }}
        >
          Total:
          <Typography
            sx={{
              mt: "5px",
              ml: 1,
              fontFamily: "jost, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3rem",
              fontWeight: 500,
              color: "hsla(0, 0%,0%, 0.75)",
            }}
          >
            {total.toFixed(2)} €
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1 fr", lg: "1fr 1fr" },
          mr: "5%",
          ml: "5%",
        }}
      >
        {order.productList.map((product) => (
          <Box
            sx={{
              display: "flex",
              borderTop: "2px solid hsla(0, 0%, 0%, 0.5)",
              mr: 2,
            }}
          >
            <Box sx={{ width: "200px", height: "200px", p: 5 }}>
              <img
                src={product.image[0]}
                alt={product.title}
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box sx={{ pt: 5, pr: 5, pb: 5, height: "200px" }}>
              <Link to={`/products/${product._id}`}>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: "400",
                    letterSpacing: "0.2rem",
                    color: "hsla(0, 0%, 9%, 0.85)",
                    fontFamily: "jost, sans-serif",
                    fontSize: "1.5rem",
                    width: "100%",
                  }}
                >
                  {product.title}
                </Typography>
              </Link>
              <Typography
                component="h3"
                sx={{
                  fontWeight: "400",
                  letterSpacing: "0.2rem",
                  color: "hsla(0, 0%, 9%, 0.729)",
                  fontFamily: "jost, sans-serif",
                  fontSize: "1.2rem",
                }}
              >
                {product.color}
              </Typography>

              <Typography
                component="h3"
                sx={{
                  fontWeight: "400",
                  letterSpacing: "0.2rem",
                  color: "hsla(0, 0%, 9%, 0.729)",
                  fontFamily: "jost, sans-serif",
                  fontSize: "1.2rem",
                  width: "100%",
                }}
              >
                {product.material}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: "400",
                    letterSpacing: "0.2rem",
                    color: "hsla(0, 0%, 9%, 0.729)",
                    fontFamily: "jost, sans-serif",
                    fontSize: "1.2rem",
                  }}
                >
                  Quantity:
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    ml: 1,
                    fontWeight: "400",
                    letterSpacing: "0.2rem",
                    color: "hsla(0, 0%, 9%, 0.729)",
                    fontFamily: "jost, sans-serif",
                    fontSize: "1.2rem",
                  }}
                >
                  {product.quantity}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
