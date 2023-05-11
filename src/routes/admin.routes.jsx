import { Routes, Route } from "react-router-dom"

import { NewDish } from './pages/NewDish'
import { EditDish } from './pages/EditDish'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish" element={<EditDish />} />
    </Routes>
  )
}