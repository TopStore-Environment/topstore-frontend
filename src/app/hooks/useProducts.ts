import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/productsService";
import { useCallback, useMemo, useState } from "react";
import { Product } from "../entities/Product";

export function useProducts() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: products, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAll,
  });

  const handleChangeSearchTerm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  const filteredProducts: Array<Product> = useMemo(() => {
    return (
      products?.filter((product) =>
        product.model_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) ?? []
    );
  }, [products, searchTerm]);

  return {
    products: products ?? [],
    isLoading: isFetching,
    searchTerm,
    handleChangeSearchTerm,
    filteredProducts,
  };
}
