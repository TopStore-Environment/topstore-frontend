import React, { createContext, useCallback, useState } from "react";
import { Product } from "../../../../../../app/entities/Product";

interface AdminDashboardContextValues {
  isNewProductModalOpen: boolean;
  openNewProductModal(): void;
  closeNewProductModal(): void;
  isEditProductModalOpen: boolean;
  openEditProductModal(product: Product): void;
  closeEditProductModal(): void;
  isDeleteProductModalOpen: boolean;
  openDeleteProductModal(product: Product): void;
  closeDeleteProductModal(): void;
  productBeingEdited: null | Product;
  productBeingDeleted: null | Product;
}

export const AdminDashboardContext = createContext(
  {} as AdminDashboardContextValues
);

export function AdminDashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] =
    useState(false);

  const [productBeingEdited, setProductBeingEdited] = useState<null | Product>(
    null
  );

  const [productBeingDeleted, setProductBeingDeleted] =
    useState<null | Product>(null);

  const openNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(true);
  }, []);

  const closeNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(false);
  }, []);

  const openEditProductModal = useCallback((product: Product) => {
    setProductBeingEdited(product);
    setIsEditProductModalOpen(true);
  }, []);

  const closeEditProductModal = useCallback(() => {
    setProductBeingEdited(null);
    setIsEditProductModalOpen(false);
  }, []);

  const openDeleteProductModal = useCallback((product: Product) => {
    setProductBeingDeleted(product);
    setIsDeleteProductModalOpen(true);
  }, []);

  const closeDeleteProductModal = useCallback(() => {
    setIsDeleteProductModalOpen(false);
  }, []);

  return (
    <AdminDashboardContext.Provider
      value={{
        isNewProductModalOpen,
        openNewProductModal,
        closeNewProductModal,
        isEditProductModalOpen,
        openEditProductModal,
        closeEditProductModal,
        isDeleteProductModalOpen,
        openDeleteProductModal,
        closeDeleteProductModal,
        productBeingEdited,
        productBeingDeleted,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
}
