import { useAdminDashboard } from "../../components/AdminDashboardContext/useAdminDashboard";

export function useDeleteProductModalController() {
  const { isDeleteProductModalOpen, closeDeleteProductModal } =
    useAdminDashboard();

  return {
    isDeleteProductModalOpen,
    closeDeleteProductModal,
  };
}
