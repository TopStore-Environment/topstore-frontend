import { DashboardHeader } from "../components/DashboardHeader";
import { AdminDashboardProvider } from "./components/AdminDashboardContext";
import { Fab } from "./components/Fab";
import { NewProductModal } from "./modals/NewProductModal";

export function AdminDashboard() {
  return (
    <AdminDashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col items-center">
        <DashboardHeader />

        <main className=" w-full max-w-[600px] flex-1 flex flex-col items-center max-h-full">
          <header className=" mt-[70px] w-full flex flex-col gap-2 border-b border-gray-400 pb-4">
            <strong className="text-lg tracking-[-0.5px]">
              Pesquisar itens em estoque
            </strong>
            <input
              type="text"
              placeholder="Digite o nome do produto..."
              className="px-4 py-2 rounded-[13px] w-full max-w-[600px] outline-none"
            />
          </header>
        </main>

        <Fab />
        <NewProductModal />
      </div>
    </AdminDashboardProvider>
  );
}
