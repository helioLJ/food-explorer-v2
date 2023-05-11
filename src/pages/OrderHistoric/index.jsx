import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";

export function OrderHistoric() {
  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content statusColor="">
        <h1>Histórico de pedidos</h1>

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
            <tr>
              <td>
                <div className="circle"></div>
                Pendente
              </td>
              <td>00001</td>
              <td>1 x Salada Ramish, 1 x Torradas</td>
              <td>20/05 às 18h00</td>
            </tr>
          </tbody>
        </table>


      </Content>
      <Footer />
    </Container>
  )
}