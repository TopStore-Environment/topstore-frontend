import { useUserDashboardContext } from "../../components/UserDashboardContext/useUserDashboardContext";

export function useViewOrdersModalController() {
  const { closeViewOrdersModal, isViewOrdersModalOpen } =
    useUserDashboardContext();

  return {
    isViewOrdersModalOpen,
    closeViewOrdersModal,
  };
}
