import { useState } from "react";
import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";

export function useSalesReportModalController() {
  const { isSalesReportModalOpen, closeSalesReportModal } =
    useAdminDashboardContext();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => prevState + step);
  }

  return {
    isSalesReportModalOpen,
    closeSalesReportModal,
    handleChangeYear,
    selectedYear,
  };
}
