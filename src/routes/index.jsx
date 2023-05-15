import { BrowserRouter, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

import { ConfirmationPage } from '../pages/ConfirmationPage'

export function Routes() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      {!user && <AuthRoutes />}
      {user && <UserRoutes />}
      {user && user.isAdmin ? <AdminRoutes /> : ""}
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </BrowserRouter>
  )
}