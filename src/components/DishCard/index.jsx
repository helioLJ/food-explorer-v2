import { useState, useEffect } from "react";
import { HeartStraight, PencilSimple } from "@phosphor-icons/react";
import { Container } from "./styles";

import { Counter } from "../Counter";
import { Button } from "../Button";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useOrder } from "../../hooks/order";

export function DishCard({ name, image_url, description, price, id }) {
  const { user } = useAuth()
  const isAdmin = user.isAdmin
  const navigate = useNavigate()
  const { verifyOrder } = useOrder()

  const [totalPrice, setTotalPrice] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(null)
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

  async function toggleFavorite() {
    if(isFavorite === true) {
      const response = await api.delete(`favorites/${id}`)
      setIsFavorite(false)
      alert(response.data.message)
    } else {
      const response = await api.post(`favorites/${id}`)
      setIsFavorite(true)
      alert(response.data.message)
    }
  }

  async function handleOrder() {
    const currentOrderId = await verifyOrder()
    let orderStatus

    if (currentOrderId !== 0) {
      const { data: currentOrder } = await api.get(`/orders/${currentOrderId}`)
      orderStatus = currentOrder.order.status
    }

    if (orderStatus === "Entregue" || currentOrderId === 0) {
      // Criar um novo pedido utilizando POST
      try {
        const createdOrder = await api.post(`/orders/${id}`, { quantity })
        alert(createdOrder.data.message)
        navigate(`/order/${currentOrderId + 1}`)
      } catch (error) {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível executar esta ação.");
        }
      }
    } else if (orderStatus === "Preparando") {
      // Lançar um "alert" informando o usuário para esperar o pedido ser entregue
    } else if (orderStatus === "Pendente") {
      // Incrementa outro prato ou altera a quantidade de algum prato neste pedido
      try {
        const { data: currentOrder } = await api.get(`/orders/${currentOrderId}`)
        const currentDish = currentOrder.dishes.find((dish) => dish.id === id);
        let updatedOrder
        if (currentDish === undefined) {
          updatedOrder = await api.put(`/orders/${currentOrderId}`, {
            dish_id: id,
            quantity: quantity
          })
        } else {
          updatedOrder = await api.put(`/orders/${currentOrderId}`, {
            dish_id: id,
            quantity: currentDish.quantity + quantity
          })
        }

        alert(updatedOrder.data.message)
        navigate(`/order/${currentOrderId}`)

      } catch (error) {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível executar esta ação.");
        }
      }
    }

  }

  useEffect(() => {
    async function fetchFavorite() {
      const { data } = await api.get("favorites")

      const isFavorited = data.some((dish) => dish.id === id);

      if (isFavorited) {
        setIsFavorite(true)
      } else {
        setIsFavorite(false)
      }
    }

    fetchFavorite()
  }, [isFavorite])

  useEffect(() => {
    async function fetchImage() {
      setImageUrl(`${api.defaults.baseURL}/files/${image_url}`)
    }

    fetchImage()
  }, [])

  return (
    <Container>
      {isAdmin ? (
        <button onClick={() => navigate(`/editdish/${id}`)} className="favorite">
          <PencilSimple size={28} color="#e1e6e6" />
        </button>
      ) : (
        <button onClick={toggleFavorite} className="favorite">
          <HeartStraight
            size={28}
            color={isFavorite ? "#AB222E" : "#E1E1E6"}
            weight={isFavorite ? "fill" : "regular"}
          />
        </button>
      )}

      <img src={imageUrl} alt="Imagem do Prato" />

      <Link to={`dish/${id}`} >{name} &#62;</Link>

      <p>{description}</p>

      <span>R$ {price}</span>

      {!isAdmin && (
        <div className="cardBtns">
          <Counter quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
          <Button
            onClick={handleOrder}
            title="incluir"
            price={totalPrice}
          />
        </div>
      )}
    </Container>
  )
}