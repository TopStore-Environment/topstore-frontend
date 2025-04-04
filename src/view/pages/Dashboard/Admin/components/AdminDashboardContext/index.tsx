import React, { createContext, useCallback, useState } from "react";

interface AdminDashboardContextValues {
  isNewProductModalOpen: boolean;
  openNewProductModal(): void;
  closeNewProductModal(): void;
  isEditProductModalOpen: boolean;
  openEditProductModal(): void;
  closeEditProductModal(): void;
  isDeleteProductModalOpen: boolean;
  openDeleteProductModal(): void;
  closeDeleteProductModal(): void;
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

  const openNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(true);
  }, []);

  const closeNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(false);
  }, []);

  const openEditProductModal = useCallback(() => {
    setIsEditProductModalOpen(true);
  }, []);

  const closeEditProductModal = useCallback(() => {
    setIsEditProductModalOpen(false);
  }, []);

  const openDeleteProductModal = useCallback(() => {
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
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
}
