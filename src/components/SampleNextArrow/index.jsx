import { CaretRight } from "@phosphor-icons/react";
import { Container } from "./styles";

export function SampleNextArrow({ onClick }) {
  return (
    <Container
      onClick={onClick}
    >
      <CaretRight weight="bold" size={32} color="#ffffff" />
    </Container>
  )
}