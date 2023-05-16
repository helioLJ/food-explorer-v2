import { Container } from "./styles";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useOrder } from "../../hooks/order";

export function OrderCard({ name, price, id, updateOrder, paymentOption }) {
  const [imageUrl, setImageUrl] = useState(null)
  const { verifyOrder } = useOrder()

  async function handleRemoveDish() {
    const currentOrderId = await verifyOrder()
    const { data: currentOrder } = await api.get(`/orders/${currentOrderId}`)
    const currentDish = currentOrder.dishes.find((dish) => dish.id === id);

    if (currentDish.quantity > 1) {
      try {
        const updatedOrder = await api.put(`/orders/${currentOrderId}`, { dish_id: id, quantity: (currentDish.quantity - 1) })
        alert(updatedOrder.data.message)
        updateOrder()
      } catch (error) {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível executar esta ação.");
        }
      }
    } else {
      try {
        const deletedOrder = await api.delete(`/orders/${currentOrderId}/${id}`)
        alert(deletedOrder.data.message)
        updateOrder()
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
    async function fetchImage() {
      const response = await api.get(`dishes/${id}`)
      const image_url = response.data.image_url

      setImageUrl(`${api.defaults.baseURL}/files/${image_url}`)
    }

    fetchImage()
  }, [])

  return (
    <Container>
      <div>
        <img src={imageUrl} alt="ExampleImage" />
      </div>

      <div>
        <p>1x {name} <span>R$ {price.toFixed(2)}</span></p>
        <button
          onClick={handleRemoveDish}
          disabled={paymentOption === "confirmado" || paymentOption === "preparando" ? true : false}
        >Remover do Pedido</button>
      </div>
    </Container>
  )
}