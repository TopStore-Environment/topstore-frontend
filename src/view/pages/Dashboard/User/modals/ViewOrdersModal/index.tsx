import { Modal } from "../../../../../components/Modal";
import { useViewOrdersModalController } from "./useViewOrdersModalController";
import { OrderCard } from "./OrderCard";
import { ScrollableList } from "../../../../../components/ScrollableList";
import { Spinner } from "../../../../../components/Spinner";

export function ViewOrdersModal() {
  const { isViewOrdersModalOpen, closeViewOrdersModal, isLoading } =
    useViewOrdersModalController();

  return (
    <Modal
      title="Meus Pedidos"
      open={isViewOrdersModalOpen}
      onClose={closeViewOrdersModal}
    >
      {isLoading && (
        <div className="flex justify-center items-center">
          <Spinner className="w-7 h-7" />
        </div>
      )}

      {!isLoading && (
        <ScrollableList>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </ScrollableList>
      )}
    </Modal>
  );
}
