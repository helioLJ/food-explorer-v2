import { Receipt } from "@phosphor-icons/react";
import { Container } from "./styles";

export function OrderButtonMobile({ quantity = 0, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      <Receipt size={32} color="#FFFFFF" />
      <div>
        <p>
          {quantity}
        </p>
      </div>
    </Container>
  )
}