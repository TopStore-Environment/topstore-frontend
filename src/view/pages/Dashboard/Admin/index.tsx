import { DashboardHeader } from "../components/DashboardHeader";
import { AdminDashboardProvider } from "./components/AdminDashboardContext";
import { Fab } from "./components/Fab";
import { NewProductModal } from "./modals/NewProductModal";
import { AdminProductCard } from "./components/AdminProductCard";
import { EditProductModal } from "./modals/EditProductModal";
import { DeleteProductModal } from "./modals/DeleteProductModal";

export function AdminDashboard() {
  return (
    <AdminDashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col items-center">
        <DashboardHeader />

        <main className=" w-full max-w-[630px] flex-1 flex flex-col gap-4 items-center max-h-full">
          <header className=" mt-[70px] w-full flex flex-col gap-2 border-b border-gray-400 pb-4">
            <strong className="text-lg tracking-[-0.5px]">
              Pesquisar itens em estoque
            </strong>
            <input
              type="text"
              placeholder="Digite o nome do produto..."
              className="px-4 py-2 rounded-[13px] w-full max-w-[630px] outline-none"
            />
          </header>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <AdminProductCard
                name="Iphone 15 Pro"
                imageName="iphone-15-pro.webp"
                value={4000}
              />

              <AdminProductCard
                name="Iphone 13"
                imageName="iphone-13.webp"
                value={2500}
              />

              <AdminProductCard
                name="Iphone 16 Pro Max"
                imageName="iphone-16-pro-max.webp"
                value={6300}
              />
            </div>
          </div>
        </main>

        <Fab />
        <NewProductModal />
        <EditProductModal />
        <DeleteProductModal />
      </div>
    </AdminDashboardProvider>
  );
}
