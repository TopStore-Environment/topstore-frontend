import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";

export function useSalesReportModalController() {
  const { isSalesReportModalOpen, closeSalesReportModal } =
    useAdminDashboardContext();

  return { isSalesReportModalOpen, closeSalesReportModal };
}
