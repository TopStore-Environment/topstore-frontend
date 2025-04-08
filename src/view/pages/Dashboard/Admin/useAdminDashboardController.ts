import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../../../app/services/productsService";

export function useAdminDashboardController() {
  const { data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAll,
  });

  return {
    products: data ?? [],
    isLoading: isFetching,
  };
}
