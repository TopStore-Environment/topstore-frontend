import { UserMenu } from "./UserMenu";

export function DashboardHeader() {
  return (
    <header className="w-full h-12 flex justify-between items-center">
      <h1 className="text-2xl font-bold md:text-3xl">TopStore</h1>
      <UserMenu />
    </header>
  );
}
