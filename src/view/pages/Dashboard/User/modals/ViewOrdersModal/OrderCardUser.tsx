import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { Order } from "../../../../../../app/entities/Order";
import { formatDate } from "../../../../../../app/utils/formatDate";

interface OrderCardUserProps {
  order: Order;
}

export function OrderCardUser({ order }: OrderCardUserProps) {
  return (
    <div className="flex justify-around items-center w-[96%] py-4 border-b-[2px] border-gray-300 ">
      <LazyLoadImage
        src={`/products/${order.product.product_model.image_name}`}
        className="w-[60px] "
      />

      <div className="flex flex-col text-end">
        <span>
          <strong>Apple</strong> {order.product.model_name}
        </span>
        <span>
          <strong>Valor: </strong> {formatCurrency(order.product.value)}
        </span>
        <span>
          <strong>Feito em:</strong> {formatDate(new Date(order.created_at))}
        </span>
      </div>
    </div>
  );
}
