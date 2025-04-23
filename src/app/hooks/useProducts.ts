import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/productsService";

export function useProducts() {
  const { data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAll,
  });

  return {
    products: data ?? [],
    isLoading: isFetching,
  };
}
