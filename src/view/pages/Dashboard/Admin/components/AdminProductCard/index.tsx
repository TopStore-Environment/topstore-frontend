import { StarFilledIcon } from "@radix-ui/react-icons";
import { IMAGES_PATH } from "../../../../../../app/config/constants";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { ProductOptionsMenu } from "./ProductOptionsMenu";

interface AdminProductCardProps {
  name: string;
  imageName: string;
  value: number;
}

export function AdminProductCard({
  name,
  imageName,
  value,
}: AdminProductCardProps) {
  return (
    <div className=" w-full max-w-[204px] rounded-3xl bg-white p-4 flex flex-col items-center">
      <div className="w-full flex justify-end mb-2">
        <ProductOptionsMenu />
      </div>

      <img
        className="w-[116px] h-[140px]"
        src={`${IMAGES_PATH}/${imageName}`}
        alt="iphone 15"
      />

      <div className="mt-5 flex flex-col gap-4 text-gray-800 w-full">
        <div className="space-y-1">
          <strong>Apple {name}</strong>
          <div className="flex">
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
          </div>
        </div>
        <strong>{formatCurrency(value)}</strong>
      </div>
    </div>
  );
}
