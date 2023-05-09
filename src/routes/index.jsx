import { BrowserRouter } from "react-router-dom";

import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  )
}