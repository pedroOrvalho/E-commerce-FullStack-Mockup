import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "../redux/store";
import { fetchOrderListByUserId } from "../redux/thunk/order";

import { Box, Paper, Typography } from "@mui/material";
import OrderProductsList from "./OrderProductsList";

export default function Order() {
  const orderList = useSelector((state: RootState) => state.order.orderList);
  const userId = localStorage.getItem("_id");
  const dispatchThunk = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatchThunk(fetchOrderListByUserId(userId, navigate));
  }, [userId, dispatchThunk]);
  
  return (
    <Paper elevation={10} sx={{ margin: 4 }}>
      <Box>
        <Typography component={"h1"}>Order List</Typography>
      </Box>
      {orderList.map((order) => (
        <Box>
          <Box>
            <Typography>
              {new Date(order.createdAt).toLocaleDateString()}
            </Typography>
          </Box>
          <Box>
            {order.productList.map((productItem) => (
              <OrderProductsList productItem={productItem} />
            ))}
          </Box>
        </Box>
      ))}
    </Paper>
  );
}
