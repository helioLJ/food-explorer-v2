import { Container } from "./styles";
import { Receipt } from "@phosphor-icons/react"

import LogoFoodExplorer from "../../assets/logo-food-explorer.png"
import LogoFoodExplorerAdmin from "../../assets/logo-food-explorer-admin.png"

import { SearchField } from "../SearchField";
import { OrderButton } from "../OrderButton";
import { SignOut } from "@phosphor-icons/react";

export function HeaderUser() {
  const isAdmin = false

  return (
    <Container>
      <img src={isAdmin ? LogoFoodExplorerAdmin : LogoFoodExplorer} alt="Logo da Food Explorer" />

      <SearchField />

      {isAdmin ? (
        <OrderButton title="Novo prato" />
      )
        :
        (
          <OrderButton icon={Receipt} title="Pedidos" quantity={3} />
        )
      }

      <button>
        <SignOut size={32} color="#FFFFFF" />
      </button>
    </Container>
  )
}