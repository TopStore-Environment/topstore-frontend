import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export function AdminLogin() {
  return (
    <>
      <header>
        <h1 className="text-[50px] font-bold mb-[50px] text-center lg:hidden">
          TopStore
        </h1>
        <h1 className="font-bold text-2xl text-gray-800">Olá, Chefe!</h1>
        <p className="text-lg">Que bom te ver!</p>
      </header>

      <form className="space-y-4">
        <Input type="text" name="registration" placeholder="Matrícula" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button>Entrar</Button>
      </form>

      <Link
        to={"/login"}
        className="text-center text-gray-500 hover:text-gray-600 transition-colors outline-none w-full max-w-[307px] lg:hidden"
      >
        Entrar como usuário
      </Link>
    </>
  );
}
