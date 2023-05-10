import { useState } from "react";
import { HeartStraight, PencilSimple } from "@phosphor-icons/react";
import { Container } from "./styles";

import { Counter } from "../Counter";
import { Button } from "../Button";

import ExampleImage from "../../assets/camarao.png"

export function DishCard({ name, image_url, favorite, description, pricee }) {
  const price = 25.20
  const isAdmin = false
  const [totalPrice, setTotalPrice] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  function increaseQuantity() {
    if (quantity === 10) {
      return alert("10 é a quantidade máxima.")
    }
    setTotalPrice(price * (quantity + 1))
    setQuantity(quantity + 1)
  }

  function decreaseQuantity() {
    if (quantity === 1) {
      return alert("1 é a quantidade mínima.")
    }
    setTotalPrice(price * (quantity - 1))
    setQuantity(quantity - 1)
  }

  function toggleFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (
    <Container>
      <button onClick={toggleFavorite} className="favorite">
        {isAdmin ? (
          <PencilSimple size={28} color="#e1e6e6" />
        ) : (
          <HeartStraight
            size={28}
            color={isFavorite ? "#AB222E" : "#E1E1E6"}
            weight={isFavorite ? "fill" : "regular"}
          />
        )}
      </button>

      <img src={ExampleImage} alt="Imagem do Prato" />

      <a href="#">Spaguetti Gambe &#62;</a>

      <p>Massa fresca com camarões e pesto.</p>

      <span>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>

      {!isAdmin && (
        <div className="cardBtns">
          <Counter quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
          <Button title="incluir" price={totalPrice} />
        </div>
      )}
    </Container>
  )
}