import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export function UserRegister() {
  return (
    <>
      <header>
        <h1 className="text-[50px] font-bold mb-[50px] text-center lg:hidden">
          TopStore
        </h1>
        <h1 className="font-bold text-2xl text-gray-800">Olá!</h1>
        <p className="text-lg">Crie sua conta para começar.</p>
      </header>

      <form className="space-y-4">
        <Input type="text" name="name" placeholder="Nome" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button>Criar conta</Button>
      </form>

      <div className="w-full max-w-[307px] text-sm flex gap-1.5 mt-2 justify-center lg:hidden">
        Já possui uma conta?
        <Link to={"/login"} className="text-[#007AFF]">
          Fazer login!
        </Link>
      </div>
    </>
  );
}
