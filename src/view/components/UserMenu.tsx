import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center border-blue-150">
          <PersonIcon className="w-6 h-6 text-black" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32" align="end">
        <DropdownMenu.Item
          onSelect={signout}
          className="flex justify-between items-center"
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
