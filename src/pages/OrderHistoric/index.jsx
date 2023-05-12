import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import { OrderRow } from "../../components/OrderRow";
import { OrderRowMobile } from "../../components/OrderRowMobile";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function OrderHistoric() {
  const [historic, setHistoric] = useState(null)

  async function fetchHistoric() {
    const { data } = await api.get("/orders")
    setHistoric(data)
  }

  useEffect(() => {
    fetchHistoric()
  }, [])

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content statusColor="">
        <h1>Histórico de pedidos</h1>

        <div className="mobileOrders">
          {
            historic && historic.map(data => (
              <OrderRowMobile
                key={data.order.id}
                id={data.order.id}
                status={data.order.status}
                date={data.order.created_at}
                details={data.dishes.map(item => `${item.quantity} x ${item.name}`).join(', ')}
                updateOrders={fetchHistoric}
              />
            ))
          }
        </div>

        <div className="container-border">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              {
                historic && historic.map(data => (
                  <OrderRow
                    key={data.order.id}
                    id={data.order.id}
                    status={data.order.status}
                    date={data.order.created_at}
                    details={data.dishes.map(item => `${item.quantity} x ${item.name}`).join(', ')}
                    updateOrders={fetchHistoric}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </Content>
      <Footer />
    </Container>
  )
}