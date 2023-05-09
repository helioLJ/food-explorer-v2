import { Container } from "./styles";

import LogoFoodExplorer from "../../assets/logo-food-explorer.png"
import { SearchField } from "../SearchField";
import { OrderButton } from "../OrderButton";
import { SignOut } from "@phosphor-icons/react";

export function HeaderUser() {
  return (
    <Container>
      <img src={LogoFoodExplorer} alt="Logo da Food Explorer" />

      <SearchField />

      <OrderButton quantity={3} />

      <button>
        <SignOut size={32} color="#FFFFFF" />
      </button>
    </Container>
  )
}