import { formatCurrency } from "../../../../app/utils/formatCurrency";

export function ProductDetails() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 tracking-[-0.5px]">
        Apple Iphone 16 Pro Max
      </h1>

      <div>
        <span className=" text-gray-800 tracking-[-0.5px]">
          Especificações:
        </span>

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

        <div className="mt-10 text-3xl flex gap-4 text-gray-800">
          <strong>Por apenas:</strong>
          <span>{formatCurrency(8970)}</span>
        </div>
      </div>
    </div>
  );
}
