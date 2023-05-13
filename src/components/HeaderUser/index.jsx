import { Container } from "./styles";
import { Receipt } from "@phosphor-icons/react"

import LogoFoodExplorer from "../../assets/logo-food-explorer.png"
import LogoFoodExplorerAdmin from "../../assets/logo-food-explorer-admin.png"

import { SearchField } from "../SearchField";
import { OrderButton } from "../OrderButton";
import { SignOut } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/order";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function HeaderUser() {
  const { signOut, user } = useAuth()
  const isAdmin = user.isAdmin
  const { verifyOrder } = useOrder()
  const navigate = useNavigate()

  const [totalQuantity, setTotalQuantity] = useState(null)
  const [currentOrderId, setCurrentOrderId] = useState(null)

  async function fetchOrderDetails() {
    const orderId = await verifyOrder()
    setCurrentOrderId(orderId)
    const { data: currentOrder } = await api.get(`/orders/${orderId}`)
    const total = await currentOrder.dishes.reduce((acc, dish) => acc + dish.quantity, 0)
    setTotalQuantity(total)
  }

  useEffect(() => {
    fetchOrderDetails()
  }, [])

  return (
    <Container>
      <Link to="/">
        <img src={isAdmin ? LogoFoodExplorerAdmin : LogoFoodExplorer} alt="Logo da Food Explorer" />
      </Link>

      <SearchField />

      <Link to="/favorites">Favoritos</Link>
      <Link to="/orderhistoric">Histórico de Pedidos</Link>

      {isAdmin ? (
        <OrderButton to="/newdish" title="Novo prato" />
      )
        :
        (
          <OrderButton to={`/order/${currentOrderId}`} icon={Receipt} title="Pedidos" quantity={totalQuantity} />
        )
      }

      <button onClick={() => {
        signOut()
        navigate("/")
      }}>
        <SignOut size={32} color="#FFFFFF" />
      </button>
    </Container>
  )
}