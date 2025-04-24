import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ProductDetails } from "./components/ProductDetails";
import { ProductImage } from "./components/ProductImage";

export function Product() {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      <header className="h-12 flex items-center pl-5">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ChevronLeftIcon className="w-6 h-6 " />
          <span className="tracking-[-0.5px] text-lg">Voltar</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row gap-6 max-h-full">
        <div>
          <ProductImage image_name={"iphone-16-pro-max.webp"} />
        </div>

        <div>
          <ProductDetails />
          <Button>Fazer pedido</Button>
        </div>
      </main>
    </div>
  );
}
