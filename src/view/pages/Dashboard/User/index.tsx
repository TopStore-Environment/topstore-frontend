import { useAuth } from "../../../../app/hooks/useAuth";
import { Button } from "../../../components/Button";

export function UserDashboard() {
  const { signout } = useAuth();

  return (
    <div>
      <h1>UserDashboard</h1>
      <Button onClick={signout}>Sair</Button>
    </div>
  );
}
