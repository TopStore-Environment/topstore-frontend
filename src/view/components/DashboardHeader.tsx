import { useAuth } from "../../app/hooks/useAuth";
import { cn } from "../../app/utils/cn";
import { UserMenu } from "./UserMenu";

export function DashboardHeader() {
  const { userRole } = useAuth();

  return (
    <header
      className={cn(
        "w-full h-12 flex justify-between items-center mb-8 sm:mb-0",
        userRole === "admin" && "mb-0"
      )}
    >
      <h1 className="text-2xl font-bold md:text-3xl">TopStore</h1>
      <UserMenu />
    </header>
  );
}
