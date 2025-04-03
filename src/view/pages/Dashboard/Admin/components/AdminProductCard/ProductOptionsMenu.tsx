import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../../components/DropdownMenu";

export function ProductOptionsMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="outline-none">
          <DotsHorizontalIcon className="w-6 h-6" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        className="w-[100px] rounded-md bg-gray-50 space-y-1"
      >
        <DropdownMenu.Item className="rounded-md min-h-[20px] data-[highlighted]:bg-gray-200">
          Editar
        </DropdownMenu.Item>
        <DropdownMenu.Item className="rounded-md min-h-[20px] data-[highlighted]:bg-gray-200">
          Excluir
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
