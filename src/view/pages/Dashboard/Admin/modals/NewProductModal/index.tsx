import {
  EXISTS_BOX_OPTIONS,
  GUARANTEE_TIME_OPTIONS,
  MODELS_OPTIONS,
  STORAGE_OPTIONS,
  USE_MARKS_OPTIONS,
} from "../../../../../../app/config/constants";
import { Button } from "../../../../../components/Button";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { useNewProductModalController } from "./useNewProductModalController";

export function NewProductModal() {
  const { isNewProductModalOpen, closeNewProductModal } =
    useNewProductModalController();

  return (
    <Modal
      title="Novo Produto"
      open={isNewProductModalOpen}
      onClose={closeNewProductModal}
    >
      <form action="">
        <div className="flex flex-col gap-4">
          <Select placeholder="Modelo" options={MODELS_OPTIONS} />
          <Select placeholder="Armazenamento" options={STORAGE_OPTIONS} />
          <Select
            placeholder="Tempo de Garantia?"
            options={GUARANTEE_TIME_OPTIONS}
          />
          <Select
            placeholder="Possui Marcas de Uso?"
            options={USE_MARKS_OPTIONS}
          />
          <Select placeholder="Possui Caixa?" options={EXISTS_BOX_OPTIONS} />

          <Button type="submit">Adicionar ao Estoque</Button>
        </div>
      </form>
    </Modal>
  );
}
