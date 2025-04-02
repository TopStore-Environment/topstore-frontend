import { useContext } from "react";
import { AdminDashboardContext } from ".";

export function useAdminDashboard() {
  return useContext(AdminDashboardContext);
}
