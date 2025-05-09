import { Modal } from "../../../../../components/Modal";
import { useSalesReportModalController } from "./useSalesReportModalController";

export function SalesReportModal() {
  const { isSalesReportModalOpen, closeSalesReportModal } =
    useSalesReportModalController();

  return (
    <Modal
      title="Relatório de Vendas"
      open={isSalesReportModalOpen}
      onClose={closeSalesReportModal}
    >
      SalesReportModal
    </Modal>
  );
}
