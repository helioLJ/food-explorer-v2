import { useEffect, useState } from "react";

import { ButtonText } from "../../components/ButtonText";
import { ButtonLink } from "../../components/ButtonLink";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";

import { Container, Content } from "./styles";

import { Counter } from "../../components/Counter";
import { Receipt } from "@phosphor-icons/react";
import { IngredientDish } from "../../components/IngredientDish";
import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

export function DishDetailsUser() {
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(null)
  const [price, setPrice] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

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

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`dishes/${params.id}`)
      setData(response.data)
      setPrice(response.data.price)
      setImageUrl(`${api.defaults.baseURL}/files/${response.data.image_url}`)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <ButtonText onClick={() => navigate(-1)} title="voltar" />

        <section>
          {
            data &&
            <>
              <div>
                <img src={imageUrl} alt={data.name} />
              </div>


              <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>

                <div className="ingredients">
                  {data.ingredients.map((ingredient, index) => (
                    <IngredientDish name={ingredient} key={index} />
                  ))}
                </div>

                <div className="actionBtns">
                  {isAdmin ? (
                    <ButtonLink title="Editar" to={`/editdish/${data.id}`} />
                  ) : (
                    <>
                      <Counter increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity} />
                      <ButtonLink title="incluir" price={totalPrice} />
                      <ButtonLink icon={Receipt} title="pedir" price={totalPrice} />
                    </>
                  )}
                </div>
              </div>
            </>
          }
        </section>
      </Content>

      <Footer />
    </Container>
  )
}