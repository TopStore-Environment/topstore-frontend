import { useProducts } from "../../../../app/hooks/useProducts";

export function useUserDashboardController() {
  const { products, isLoading } = useProducts();

  return {
    products: products ?? [],
    isLoading,
  };
}
