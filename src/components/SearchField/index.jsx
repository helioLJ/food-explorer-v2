import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container } from "./styles";

export function SearchField() {
  return (
    <Container>
      <button>
        <MagnifyingGlass size={24} color="#c4c4cc" />
      </button>

      <input type="text" placeholder="Busque por pratos ou ingredientes" />
    </Container>
  )
}