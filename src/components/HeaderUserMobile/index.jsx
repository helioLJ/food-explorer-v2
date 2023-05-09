import { Container } from "./styles";

import LogoMobileFoodExplorer from "../../assets/logo-mobile-food-explorer.png"
import LogoMobileFoodExplorerAdmin from "../../assets/logo-mobile-food-explorer-admin.png"
import { OrderButtonMobile } from "../OrderButtonMobile";
import { List } from "@phosphor-icons/react";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile";

export function HeaderUserMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const isAdmin = false

  function handleMenuToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <button onClick={handleMenuToggle}>
        <List size={32} color="#FFFFFF" />
      </button>
      
      <MenuMobile isOpen={isOpen} handleMenuToggle={handleMenuToggle} />

      <img src={isAdmin ? LogoMobileFoodExplorerAdmin : LogoMobileFoodExplorer} alt="Logo da Food Explorer" />

      {
        !isAdmin ? (
          <OrderButtonMobile quantity={3} />
        ) : (
          <div></div>
        )
      }

    </Container>
  )
}