import { Modal } from "../../../../../components/Modal";
import { useNewProductModalController } from "./useNewProductModalController";

export function NewProductModal() {
  const { isNewProductModalOpen, closeNewProductModal } =
    useNewProductModalController();

  return (
    <Modal
      title="Novo produto"
      open={isNewProductModalOpen}
      onClose={closeNewProductModal}
    >
      <form action="">
        <div>
          <h1>NewProductModal</h1>
        </div>
      </form>
    </Modal>
  );
}
