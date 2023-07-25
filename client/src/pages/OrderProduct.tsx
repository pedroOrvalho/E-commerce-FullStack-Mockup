
import { Product } from "../types/type";

type Props = {
  orderProduct: Product;
};

export default function OrderProduct({ orderProduct }: Props) {
  return <div>{orderProduct.title}</div>;
}
