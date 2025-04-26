import { Modal } from "../../../../../components/Modal";
import { useViewOrdersModalController } from "./useViewOrdersModalController";

export function ViewOrdersModal() {
  const { isViewOrdersModalOpen, closeViewOrdersModal } =
    useViewOrdersModalController();

  return (
    <Modal
      title="Meus Pedidos"
      open={isViewOrdersModalOpen}
      onClose={closeViewOrdersModal}
    >
      <h1>ViewOrdersModal</h1>
    </Modal>
  );
}
