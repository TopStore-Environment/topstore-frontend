import { UserMenu } from "../../../components/UserMenu";

export function AdminDashboard() {
  return (
    <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6">
      <header className="h-12 flex justify-between items-center">
        <h1 className="text-2xl font-bold md:text-3xl ">TopStore</h1>
        <UserMenu />
      </header>
    </div>
  );
}
