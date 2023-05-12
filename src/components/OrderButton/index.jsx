import { Container } from "./styles"


export function OrderButton({ title = null, icon: Icon, quantity = null, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {Icon && <Icon size={32} color="#FFFFFF" />}
      <p>{title} {quantity ? `(${quantity})` : ""} </p>
    </Container>
  )
}