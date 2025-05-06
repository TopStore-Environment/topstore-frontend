import { useProducts } from "../../../../app/hooks/useProducts";

export function useUserDashboardController() {
  const {
    isLoading,
    searchTerm,
    handleChangeSearchTerm,
    products,
    filteredProducts,
  } = useProducts();

  return {
    products: products ?? [],
    filteredProducts,
    isLoading,
    searchTerm,
    handleChangeSearchTerm,
  };
}
