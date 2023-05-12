import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import { useEffect } from "react";
import { useOrder } from "../../hooks/order";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function ConfirmationPage() {
  const { verifyOrder } = useOrder()
  const navigate = useNavigate()

  async function confirmPayment() {
    const currentOrderId = await verifyOrder()

    try {
      await api.put(`/orders/${currentOrderId}`, { status: "Preparando" })
      alert("O pedido foi pago e está sendo preparado!")
      navigate(`/order/${currentOrderId}`)
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível executar esta ação.");
      }
    }
  }

  useEffect(() => {
    confirmPayment()
  }, [])

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <h1>Pagamento Confirmado!</h1>
      </Content>

      <Footer />
    </Container>
  )
}