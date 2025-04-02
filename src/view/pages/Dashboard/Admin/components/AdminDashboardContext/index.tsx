import React, { createContext, useCallback, useState } from "react";

interface AdminDashboardContextValues {
  isNewProductModalOpen: boolean;
  openNewProductModal(): void;
  closeNewProductModal(): void;
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

  const openNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(true);
  }, []);

  const closeNewProductModal = useCallback(() => {
    setIsNewProductModalOpen(false);
  }, []);

  return (
    <AdminDashboardContext.Provider
      value={{
        isNewProductModalOpen,
        openNewProductModal,
        closeNewProductModal,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
}
