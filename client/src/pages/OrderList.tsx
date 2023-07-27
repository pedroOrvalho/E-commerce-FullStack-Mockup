import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "../redux/store";
import { fetchOrderListByUserId } from "../redux/thunk/order";

import { Box, Button, Paper, Typography } from "@mui/material";
import IsLoading from "../components/IsLoading";

export default function OrderList() {
  const orderList = useSelector((state: RootState) => state.order.orderList);
  const isLoading = useSelector((state: RootState) => state.order.isLoading);
  const dispatchThunk = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatchThunk(fetchOrderListByUserId(navigate));
  }, [dispatchThunk, navigate]);

  if (isLoading) {
    <IsLoading isLoading={isLoading} />;
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          mr: "3%",
          ml: "3%",
          height: "80vh",
          width: "300px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            pt: 20,
            pb: 20,
            borderBottom: "3px solid hsla(0, 0%,0%, 0.5)",
            borderTop: "3px solid hsla(0, 0%,0%, 0.5)",
            fontFamily: "jost, sans-serif",
            fontSize: "2.4rem",
            letterSpacing: "0.3rem",
            fontWeight: 500,
            color: "hsla(0, 0%,0%, 0.75)",
          }}
          component={"h1"}
        >
          My
          <br />
          Orders
        </Typography>
      </Box>
      <Box
        sx={{
          mr: "3%",
          p: 3,
          mt: 6,
          mb: 6,
          display: "grid",
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
          gap: 5,
          width: "100%",
          justifyContent: "space-evenly",
          borderTop: "2px solid hsla(0,0%,0%, 0.6)",
          borderBottom: "2px solid hsla(0,0%,0%, 0.6)",
        }}
      >
        {orderList.map((order) => (
          <Box key={order._id} component={Paper} variant={"outlined"}>
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
                  p: 2,
                  pt: 0,
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
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {order.productList.slice(0, 2).map((orderProductItem) => (
                <Box key={orderProductItem._id}>
                  <img
                    className="order_img"
                    src={orderProductItem.image[0]}
                    alt={orderProductItem.title}
                    width={"100px"}
                    height={"100px"}
                  />
                </Box>
              ))}
              <Box sx={{ p: 1 }}>
                {order.productList.length > 2 && (
                  <Box
                    sx={{
                      bottom: "2px",
                      position: "relative",
                      width: "100px",
                      height: "100px",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `url(${order.productList[2].image[0]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: "brightness(0.4)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 3,
                        right: 3,
                        color: "#fff",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        padding: "2px 5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      +{order.productList.length - 2} more
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link to={`/my-orders/${order._id}`}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    mb: 3,
                    borderRadius: "0",
                    textTransform: "capitalize",
                    letterSpacing: "0.2rem",
                    fontSize: "1rem",
                    bgcolor: "hsla(0, 0%, 0%, 1)",
                    "&:hover": {
                      bgcolor: "hsla(0, 0%, 0%, 0.8)",
                    },
                  }}
                >
                  Check Order Details
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
