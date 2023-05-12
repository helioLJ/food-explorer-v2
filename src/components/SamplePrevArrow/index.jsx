import { CaretLeft } from "@phosphor-icons/react";
import { Container } from "./styles";

export function SamplePrevArrow({ onClick }) {
  return (
    <Container
      onClick={onClick}
    >
      <CaretLeft weight="bold" size={32} color="#ffffff" />
    </Container>
  )
}