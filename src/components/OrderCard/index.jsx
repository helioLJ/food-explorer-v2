import { Container } from "./styles";

import ExampleImage from "../../assets/camarao.png"

export function OrderCard({ name, price }) {
  return (
    <Container>
      <div>
        <img src={ExampleImage} alt="ExampleImage" />
      </div>

      <div>
        <p>1x {name} <span>R$ {price}</span></p>
        <button>Remover do Pedido</button>
      </div>
    </Container>
  )
}