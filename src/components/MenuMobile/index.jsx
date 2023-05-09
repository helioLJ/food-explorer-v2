import { Container, Content, HeaderMobile, Nav, NavLink } from "./styles";
import { SearchField } from "../SearchField";
import { X } from "@phosphor-icons/react";

export function MenuMobile({ handleMenuToggle, isOpen }) {
  return (
    <Container isOpen={isOpen}>
      <HeaderMobile>
        <button onClick={handleMenuToggle}>
          <X size={32} color="#FFFFFF" />
          <p>Menu</p>
        </button>
      </HeaderMobile>

      <Content>
        <SearchField></SearchField>

        <Nav>
          <NavLink>Sair</NavLink>
        </Nav>
      </Content>
    </Container>
  )
}