import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { Button } from "../../../components/Button";

export function ProductDetails() {
  return (
    <div className="w-full h-full p-4 sm:p-10 space-y-10 sm:space-y-16">
      <h1 className="text-xl sm:text-3xl font-bold text-gray-800 tracking-[-0.5px]">
        Apple Iphone 16 Pro Max
      </h1>

      <div>
        <span className="text-gray-800 tracking-[-0.5px]">Especificações:</span>

        <div className="mt-5 space-y-2 text-gray-800 tracking-[-0.5px]">
          <div className="flex justify-between">
            <strong>Armazenamento: </strong>
            <span>128 GB</span>
          </div>
          <div className="flex justify-between">
            <strong>Cor: </strong>
            <span>Dourado</span>
          </div>
          <div className="flex justify-between">
            <strong>Estado da bateria: </strong>
            <span>98%</span>
          </div>
          <div className="flex justify-between">
            <strong>Garantia: </strong>
            <span>9 Meses</span>
          </div>
          <div className="flex justify-between">
            <strong>Marcas de uso: </strong>
            <span>Não</span>
          </div>
          <div className="flex justify-between">
            <strong>Presença de caixa: </strong>
            <span>Sim</span>
          </div>
        </div>
      </div>

      <div className="mt-10 text-xl sm:text-3xl flex gap-1 sm:gap-4 text-gray-800 tracking-[-0.5px]">
        <strong>Por apenas:</strong>
        <span>{formatCurrency(8970)}</span>
      </div>

      <Button className="h-14 text-lg w-full">Fazer pedido</Button>
    </div>
  );
}
