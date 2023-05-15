import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";

import { Container, Content } from "./styles";
import { FavoriteCard } from "../../components/FavoriteCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Favorites() {
  const [data, setData] = useState(null)

  async function fetchFavorites() {
    const { data } = await api.get("/favorites")
    setData(data)
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <h1>Meus Favoritos</h1>

        <section>
          {
            data && data.map(favorite => (
              <FavoriteCard
                name={favorite.name}
                image_url={favorite.image_url}
                id={favorite.id}
                key={favorite.id}
                update={fetchFavorites}
              />
            ))
          }
        </section>
      </Content>

      <Footer />
    </Container>
  )
}