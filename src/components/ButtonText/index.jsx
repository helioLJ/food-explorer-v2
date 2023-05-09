import { CaretLeft } from "@phosphor-icons/react";
import { Container } from "./styles";

export function ButtonText({ title, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      <CaretLeft size={32} color="#FFFFFF" />
      <p>{title}</p>
    </Container>
  )
}