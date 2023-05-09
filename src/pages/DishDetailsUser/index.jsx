import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Container, Content } from "./styles";

export function DishDetailsUser() {
  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <h1>oi</h1>
      </Content>

    </Container>
  )
}