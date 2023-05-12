import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";
import { OrderCard } from "../../components/OrderCard";
import { Button } from "../../components/Button";
import { MdPix, MdCreditCard } from 'react-icons/md';

import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import InputMask from 'react-input-mask';
import { CheckCircle, ForkKnife, Receipt } from "@phosphor-icons/react";

import QRCode from "react-qr-code";
import { useOrder } from "../../hooks/order";

export function OrderDetails() {
  const { verifyOrder } = useOrder()
  const [order, setOrder] = useState(null)
  const params = useParams()
  const [paymentOption, setPaymentOption] = useState("pix")

  const [cardNumber, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [Cvc, setCvc] = useState("");

  async function fetchOrder() {
    const { data } = await api.get(`/orders/${params.id}`)
    setOrder(data)
  }

  function handleOption(option) {
    setPaymentOption(option)
  }

  function handleCardNumberChange(event) {
    setCardNumber(event.target.value);
  }

  function handleValidityChange(event) {
    setValidity(event.target.value);
  }

  function handleCvcChange(event) {
    setCvc(event.target.value);
  }

  async function verifyStatus() {
    const currentOrderId = await verifyOrder()
    const { data: currentOrder } = await api.get(`/orders/${currentOrderId}`)
    if (currentOrder.order.status === "Preparando") {
      setPaymentOption("preparando")
      setTimeout(async () => {
        alert("Saiu para entrega!")
        setPaymentOption("confirmado")
        await api.put(`/orders/${currentOrderId}`, { status: "Entregue" })
      }, 3000)
    } else if (currentOrder.order.status === "Entregue") {
      setPaymentOption("confirmado")
    }
  }

  useEffect(() => {
    fetchOrder()
    verifyStatus()
  }, [])

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content paymentOption={paymentOption}>
        <section>
          <div>
            <h2>Meu Pedido</h2>

            {
              order &&
              order.dishes.map(({ name, quantity, price, id }) => (
                Array.from({ length: quantity }, (_, index) => (
                  <OrderCard updateOrder={fetchOrder} key={`${name}-${index}`} name={name} price={price} id={id} />
                ))
              ))
            }

            <span>Total: R$ {order && (order.dishes.reduce((accumulator, item) => {
              return accumulator + (item.price * item.quantity);
            }, 0).toFixed(2))}</span>

            <Button title="Avançar" />
          </div>

          <div>
            <h2>Pagamento</h2>

            <div className="payment">
              <div className="payment-header">
                <button
                  className="pix"
                  onClick={() => handleOption("pix")}
                  disabled={paymentOption === "confirmado" || paymentOption === "preparando" ? true : false}
                >
                  <MdPix size={24} />
                  Pix
                </button>
                <button
                  className="cc"
                  onClick={() => handleOption("cc")}
                  disabled={paymentOption === "confirmado" || paymentOption === "preparando" ? true : false}
                >
                  <MdCreditCard size={24} />
                  Crédito
                </button>
              </div>
              <div className="payment-body">
                {
                  paymentOption == "confirmado" ? (
                      <div className="status-payment">
                        <CheckCircle color="#C4C4CC" size={148} />
                        <p>Saiu pra entrega!</p>
                      </div>
                  ) : paymentOption == "preparando" ? (
                    <div className="status-payment">
                      <ForkKnife color="#C4C4CC" size={148} />
                      <p>Saiu pra entrega!</p>
                    </div>
                  ) : paymentOption == "pix" ? (
                    <>
                      <div>
                        <QRCode
                          size={256}
                          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                          value={"http://localhost:3333/confirmation"}
                          viewBox={`0 0 256 256`}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="input-wrapper">
                        <label htmlFor="cardNumber">Número do Cartão</label>
                        <InputMask
                          mask="9999 9999 9999 9999"
                          placeholder="0000 0000 0000 0000"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="form-control"
                          id="cardNumber"
                        />
                      </div>
                      <div className="secondRow">
                        <div className="input-wrapper">
                          <label htmlFor="validity">Validade</label>
                          <InputMask
                            mask="99/99"
                            placeholder="04/25"
                            value={validity}
                            onChange={handleValidityChange}
                            className="form-control"
                            id="validity"
                          />
                        </div>
                        <div className="input-wrapper">
                          <label htmlFor="CVC">CVC</label>
                          <InputMask
                            mask="999"
                            placeholder="000"
                            value={Cvc}
                            onChange={handleCvcChange}
                            className="form-control"
                            id="CVC"
                          />
                        </div>
                      </div>
                      <Button onClick={() => { }} icon={Receipt} title="Finalizar pagamento" />
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </section>
      </Content>

      <Footer />
    </Container>
  )
}