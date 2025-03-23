import { useAuth } from "../../../../app/hooks/useAuth";
import { Button } from "../../../components/Button";

export function AdminDashboard() {
  const { signout } = useAuth();

  return (
    <div>
      <h1>AdminDashboard</h1>
      <Button onClick={signout}>Sair</Button>
    </div>
  );
}
