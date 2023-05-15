import { Container } from "./styles";

import LogoMobileFoodExplorer from "../../assets/logo-mobile-food-explorer.png"
import LogoMobileFoodExplorerAdmin from "../../assets/logo-mobile-food-explorer-admin.png"
import { OrderButtonMobile } from "../OrderButtonMobile";
import { List } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { MenuMobile } from "../MenuMobile";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/order";
import { api } from "../../services/api";

export function HeaderUserMobile() {
  const { user } = useAuth()
  const { verifyOrder } = useOrder()
  const isAdmin = user.isAdmin

  const [isOpen, setIsOpen] = useState(false)
  const [totalQuantity, setTotalQuantity] = useState(null)
  const [currentOrderId, setCurrentOrderId] = useState(null)

  function handleMenuToggle() {
    setIsOpen(!isOpen)
  }

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
      <button onClick={handleMenuToggle}>
        <List size={32} color="#FFFFFF" />
      </button>

      <MenuMobile isopen={isOpen} handleMenuToggle={handleMenuToggle} />

      <Link to="/">
        <img src={isAdmin ? LogoMobileFoodExplorerAdmin : LogoMobileFoodExplorer} alt="Logo da Food Explorer" />
      </Link>

      {
        !isAdmin ? (
          <OrderButtonMobile to={`/order/${currentOrderId}`} quantity={totalQuantity} />
        ) : (
          <div></div>
        )
      }

    </Container>
  )
}