import { StarFilledIcon } from "@radix-ui/react-icons";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { ProductOptionsMenu } from "./ProductOptionsMenu";
import { Product } from "../../../../../../app/entities/Product";

interface AdminProductCardProps {
  data: Product;
}

export function AdminProductCard({ data }: AdminProductCardProps) {
  const { model_name, value } = data;
  const { image_name } = data.product_model;

  return (
    <div className="w-full max-w-[204px] h-full max-h-[310px] rounded-3xl bg-white p-4 flex flex-col items-center">
      <div className="w-full flex justify-end mb-1">
        <ProductOptionsMenu data={data} />
      </div>

      <img
        className="w-[110px] h-[134px]"
        src={`/products/${image_name}`}
        alt="Imagem do Produto"
      />

      <div className="mt-2 flex flex-col gap-1 text-gray-800 w-full">
        <strong>Apple {model_name}</strong>
        <div className="flex">
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
          <StarFilledIcon />
        </div>
      </div>

      <div className="w-full mt-2 h-full flex items-end">
        <strong>{formatCurrency(value)}</strong>
      </div>
    </div>
  );
}
