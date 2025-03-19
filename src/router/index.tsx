import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { UserLogin } from "../view/pages/Login/User";
import { UserRegister } from "../view/pages/Register/User";
import { AdminLogin } from "../view/pages/Login/Admin";
import { AdminDashboard } from "../view/pages/Dashboard/Admin";
import { UserDashboard } from "../view/pages/Dashboard/User";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        <Route path="/" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
