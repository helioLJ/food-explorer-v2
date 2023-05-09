import { Container } from "./styles";

import LogoFoodExplorerFooter from "../../assets/logo-food-explorer-footer.png"
import LogoMobileFoodExplorerFooter from "../../assets/logo-mobile-food-explorer-footer.png"

export function Footer() {

  return (
    <Container>
      <img src={LogoFoodExplorerFooter} alt="Logo da Food Explorer" />
      <img src={LogoMobileFoodExplorerFooter} alt="Logo da Food Explorer" />

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}