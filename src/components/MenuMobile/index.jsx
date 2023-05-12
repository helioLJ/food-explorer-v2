import { Container, Content, HeaderMobile, Nav, NavLink } from "./styles";
import { SearchField } from "../SearchField";
import { X } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";

export function MenuMobile({ handleMenuToggle, isOpen }) {
  const { signOut, user } = useAuth()
  const isAdmin = user.isAdmin

  return (
    <Container isOpen={isOpen}>
      <HeaderMobile>
        <button onClick={handleMenuToggle}>
          <X size={32} color="#FFFFFF" />
          <p>Menu</p>
        </button>
      </HeaderMobile>

      <Content>
        <SearchField />

        <Nav>
          {isAdmin ? <NavLink to="/newdish">Novo Prato</NavLink> : ""}
          <NavLink to="/favorites">Favoritos</NavLink>
          <NavLink to="/orderhistoric">Histórico de Pedidos</NavLink>
          <button onClick={signOut}>Sair</button>
        </Nav>
      </Content>
    </Container>
  )
}