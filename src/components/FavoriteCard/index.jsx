import { Container } from "./styles";

import Salada from "../../assets/salada.png"

export function FavoriteCard() {

  return (
    <Container>
      <div>
        <img src={Salada} alt="Imagem do Prato Favorito" />
      </div>

      <div>
        <h3>Salada Radish</h3>
        <button>Remover dos Favoritos</button>
      </div>
    </Container>
  )
}