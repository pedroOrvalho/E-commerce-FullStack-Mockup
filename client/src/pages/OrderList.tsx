import { useEffect } from "react";
import { fetchOrderListByUserId } from "../redux/thunk/order";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import OrderListDetail from "./OrderListDetail";

export default function Order() {
  const orderList = useSelector((state: RootState) => state.order.orderList);
  const userId = localStorage.getItem("_id");
  const dispatchThunk = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatchThunk(fetchOrderListByUserId(userId));
  }, [userId, dispatchThunk]);

  return (
    <div>
      {orderList.map((order) => (
        <OrderListDetail order={order} />
      ))}
    </div>
  );
}
