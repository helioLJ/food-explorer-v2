import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Favorites } from "../pages/Favorites"
import { DishDetailsUser } from '../pages/DishDetailsUser'
import { OrderDetails } from '../pages/OrderDetails'
import { OrderHistoric } from '../pages/OrderHistoric'
import { ConfirmationPage } from '../pages/ConfirmationPage'

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<DishDetailsUser />} />
      <Route path="/order/:id" element={<OrderDetails />} />
      <Route path="/orderhistoric" element={<OrderHistoric />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  )
}