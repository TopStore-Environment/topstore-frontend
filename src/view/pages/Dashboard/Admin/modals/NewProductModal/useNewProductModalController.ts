import { useAdminDashboard } from "../../components/AdminDashboardContext/useAdminDashboard";

export function useNewProductModalController() {
  const { isNewProductModalOpen, closeNewProductModal } = useAdminDashboard();

  return {
    isNewProductModalOpen,
    closeNewProductModal,
  };
}
