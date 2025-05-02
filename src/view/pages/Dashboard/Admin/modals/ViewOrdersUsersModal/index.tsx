import { Modal } from "../../../../../components/Modal";
import { useViewOrdersUsersModalController } from "./useViewOrdersUsersModalController";

export function ViewOrdersUsersModal() {
  const { isViewOrdersModalOpen, closeViewOrdersModal } =
    useViewOrdersUsersModalController();

  return (
    <Modal
      title="Pedidos Realizados"
      open={isViewOrdersModalOpen}
      onClose={closeViewOrdersModal}
    >
      ViewOrdersUsersModal
    </Modal>
  );
}
