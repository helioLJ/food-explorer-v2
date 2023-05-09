import { Receipt } from "@phosphor-icons/react"
import { Container } from "./styles"

export function OrderButton({ quantity = 0, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      <Receipt size={32} color="#FFFFFF" />
      <p>Pedidos ({quantity})</p>
    </Container>
  )
}