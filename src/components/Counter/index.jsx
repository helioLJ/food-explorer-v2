import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

export function Counter({ quantity, increaseQuantity, decreaseQuantity }) {
  return (
    <Container>
      <button onClick={decreaseQuantity}><Minus size={24} color="#FFFFFF" /></button>
      <p>{quantity.toString().padStart(2, '0')}</p>
      <button onClick={increaseQuantity}><Plus size={24} color="#FFFFFF" /></button>
    </Container>
  )
}