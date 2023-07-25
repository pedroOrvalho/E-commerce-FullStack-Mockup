import React from "react";
import { Order } from "../types/type";
import OrderProduct from "./OrderProduct";

type Props = {
  order: Order;
};

export default function OrderListDetail({ order }: Props) {
  const orderlist = order.productList;
  return (
    <div>
      <h1>{order._id}</h1>
      <div>
        {orderlist.map((orderProduct) => (
          <OrderProduct orderProduct={orderProduct} />
        ))}
      </div>
    </div>
  );
}
