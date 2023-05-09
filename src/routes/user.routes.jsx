import { Routes, Route } from "react-router-dom"

import { DishDetailsUser } from './pages/DishDetailsUser'

export function UserRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/dish/:id" element={<DishDetailsUser />} />
      {/* <Route path="/order/:id" element={<OrderDetails />} /> */}
      {/* <Route path="/orderhistoric" element={<OrderHistoric />} /> */}
      {/* <Route path="/favorites" element={<Favorites />} /> */}
    </Routes>
  )
}