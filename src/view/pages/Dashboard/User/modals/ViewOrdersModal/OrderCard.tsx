import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";

export function OrderCard() {
  return (
    <div className="flex justify-around items-center w-[96%] py-4 border-b-[2px] border-gray-300 ">
      <LazyLoadImage src="/products/iphone-15-pro.webp" className="w-[60px] " />

      <div className="flex flex-col text-end">
        <span>
          <strong>Apple</strong> Iphone 15 Pro
        </span>
        <span>
          <strong>Valor: </strong> {formatCurrency(5300)}
        </span>
        <span>
          <strong>Feito em:</strong> 29/05/2025
        </span>
      </div>
    </div>
  );
}
