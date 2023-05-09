import { useState } from "react";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";

import { Container, Content } from "./styles";

import Salada from "../../assets/salada.png"
import { Ingredient } from "../../components/Ingredient";
import { Counter } from "../../components/Counter";
import { Receipt } from "@phosphor-icons/react";

export function DishDetailsUser() {
  const price = 25.20
  const isAdmin = false
  const [totalPrice, setTotalPrice] = useState(price)
  const [quantity, setQuantity] = useState(1)

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

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <ButtonText title="voltar" />

        <section>
          <div>
            <img src={Salada} alt="Prato" />
          </div>

          <div>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <div className="ingredients">
              <Ingredient name="alface" />
              <Ingredient name="cebola" />
              <Ingredient name="pão naan" />
              <Ingredient name="pepino" />
              <Ingredient name="rabanete" />
              <Ingredient name="tomate" />
            </div>

            <div className="actionBtns">
              {isAdmin ? (
                <Button title="Editar" />
              ) : (
                <>
                  <Counter increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity} />
                  <Button title="incluir" price={totalPrice} />
                  <Button icon={Receipt} title="pedir" price={totalPrice} />
                </>
              )}
            </div>
          </div>
        </section>
      </Content>

      <Footer />
    </Container>
  )
}