import { Box } from "@mui/material";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderById } from "../redux/thunk/order";
import { useNavigate, useParams } from "react-router-dom";
import IsLoading from "../components/IsLoading";

export default function OrderDetail() {
  const order = useSelector((state: RootState) => state.order.order);
  const isLoading = useSelector((state: RootState) => state.order.isLoading);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const dispatchThunk = useDispatch<AppDispatch>();

  console.log(order);

  useEffect(() => {
    dispatchThunk(fetchOrderById(id, navigate));
  }, [dispatchThunk, id, navigate]);

  if (isLoading) {
    return <IsLoading isLoading={isLoading} />;
  }
  return (
    <Box>
      {order.productList.map((product) => (
        <Box>
          <p>{product.title}</p>
        </Box>
      ))}
    </Box>
  );
}
