import { createContext, useContext } from "react";
import { api } from "../services/api";

export const OrderContext = createContext({})

function OrderProvider({ children }) {

  async function verifyOrder() {
    const { data } = await api.get("/orders")
    
    const maxIdObject = data.reduce((max, current) => {
      if (current.order && current.order.id > max.order.id) {
        return current;
      } else {
        return max;
      }
    }, { order: { id: 0 } });
    
    const currentOrderId = maxIdObject.order.id
    return currentOrderId
  }

  return (
    <OrderContext.Provider value={{verifyOrder}}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder() {
  const context = useContext(OrderContext)

  return context
}

export { OrderProvider, useOrder }