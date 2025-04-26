import { DashboardHeader } from "../../../components/DashboardHeader";
import { Spinner } from "../../../components/Spinner";
import { UserProductCard } from "./components/UserProductCard";
import { useUserDashboardController } from "./useUserDashboardController";
import EmptyStateImage from "../../../../assets/empty-state.svg";
import { UserDashboardProvider } from "./components/UserDashboardContext";
import { ViewOrdersModal } from "./modals/ViewOrdersModal";

export function UserDashboard() {
  const { products, isLoading } = useUserDashboardController();

  const hasProducts = products.length > 0;

  return (
    <UserDashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col items-center">
        <DashboardHeader />

        <main className="w-full max-w-[630px] py-4 flex-1 flex flex-col gap-4 items-center max-h-full">
          <header className="mt-[70px] w-full flex flex-col gap-2 border-b border-gray-400 pb-4">
            <strong className="text-lg tracking-[-0.5px]">
              Pesquisar itens em estoque
            </strong>
            <input
              type="text"
              placeholder="Digite o nome do produto..."
              className="px-4 py-2 rounded-[13px] w-full max-w-[630px] outline-none"
            />
          </header>

          {isLoading && (
            <div className="flex items-center justify-center flex-col mt-10">
              <Spinner className="w-10 h-10" />
            </div>
          )}

          {!hasProducts && !isLoading && (
            <div className="flex items-center justify-center flex-col mt-10">
              <img src={EmptyStateImage} alt="Empty State" />
              <p className="text-gray-700 text-center">
                Não encontramos nenhum produto
              </p>
            </div>
          )}

          {hasProducts && !isLoading && (
            <div className="w-full flex justify-center">
              <div className="w-full grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5">
                {products.map((product) => (
                  <UserProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          )}
        </main>

        <ViewOrdersModal />
      </div>
    </UserDashboardProvider>
  );
}
