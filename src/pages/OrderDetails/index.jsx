import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";
import { OrderCard } from "../../components/OrderCard";
import { Button } from "../../components/Button";

import { Container, Content } from "./styles";

export function OrderDetails() {

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <section>
          <div>
            <h2>Meus Favoritos</h2>

            <OrderCard name="Salada" price={25.35} />
            <OrderCard name="Salada" price={25.35} />
            <OrderCard name="Salada" price={25.35} />
            <span>Total: R$ 103,78</span>

            <Button title="Avançar" />
          </div>

          <div>
            <h2>Pagamento</h2>

            <div className="payment">
              <div className="payment-header">
                <button className="pix">
                  píx
                </button>
                <button className="cc">
                  cc
                </button>
              </div>
            </div>
          </div>
        </section>
      </Content>

      <Footer />
    </Container>
  )
}