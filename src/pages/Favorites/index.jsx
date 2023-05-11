import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import { FavoriteCard } from "../../components/FavoriteCard";

export function Favorites() {

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <h1>Meus Favoritos</h1>

        <section>
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </section>
      </Content>

      <Footer />
    </Container>
  )
}