import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";

export function useViewOrdersUsersModalController() {
  const { isViewOrdersModalOpen, closeViewOrdersModal } =
    useAdminDashboardContext();

  return {
    isViewOrdersModalOpen,
    closeViewOrdersModal,
  };
}
