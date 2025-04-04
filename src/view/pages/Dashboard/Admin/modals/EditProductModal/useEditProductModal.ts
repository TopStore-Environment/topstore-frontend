import { useAdminDashboard } from "../../components/AdminDashboardContext/useAdminDashboard";

export function useEditProductModalController() {
  const { isEditProductModalOpen, closeEditProductModal } = useAdminDashboard();

  return {
    isEditProductModalOpen,
    closeEditProductModal,
  };
}
