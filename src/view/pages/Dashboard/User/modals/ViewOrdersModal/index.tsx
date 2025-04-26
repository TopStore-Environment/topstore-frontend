import { Modal } from "../../../../../components/Modal";
import { useViewOrdersModalController } from "./useViewOrdersModalController";
import { OrderCard } from "./OrderCard";
import { ScrollableList } from "../../../../../components/ScrollableList";

export function ViewOrdersModal() {
  const { isViewOrdersModalOpen, closeViewOrdersModal } =
    useViewOrdersModalController();

  return (
    <Modal
      title="Meus Pedidos"
      open={isViewOrdersModalOpen}
      onClose={closeViewOrdersModal}
    >
      <ScrollableList>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollableList>
    </Modal>
  );
}
