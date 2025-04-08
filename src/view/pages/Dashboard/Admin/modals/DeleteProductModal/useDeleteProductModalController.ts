import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAdminDashboard } from "../../components/AdminDashboardContext/useAdminDashboard";
import { productsService } from "../../../../../../app/services/productsService";
import toast from "react-hot-toast";

export function useDeleteProductModalController() {
  const {
    isDeleteProductModalOpen,
    closeDeleteProductModal,
    productBeingDeleted,
  } = useAdminDashboard();

  const { isLoading, mutateAsync } = useMutation(productsService.remove);
  const queryClient = useQueryClient();

  async function handleDeleteProduct() {
    try {
      await mutateAsync(productBeingDeleted!.id);

      closeDeleteProductModal();
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Produto removido do estoque com sucesso");
    } catch {
      toast.error("Erro ao remover produto do estoque");
    }
  }

  return {
    isDeleteProductModalOpen,
    closeDeleteProductModal,
    isLoading,
    handleDeleteProduct,
  };
}
