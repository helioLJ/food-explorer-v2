import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function FavoriteCard({ name, image_url, id, update }) {
  const [imageUrl, setImageUrl] = useState(null)

  async function removeFavorite() {
    const confirmation = window.confirm("Deseja mesmo remover este prato dos seus favoritos?")
    if (confirmation) {
      const response = await api.delete(`favorites/${id}`)
      alert(response.data.message)
      update()
    }
  }

  useEffect(() => {
    async function fetchImage() {
      setImageUrl(`${api.defaults.baseURL}/files/${image_url}`)
    }

    fetchImage()
  }, [])

  return (
    <Container>
      <div>
        <img src={imageUrl} alt="Imagem do Prato Favorito" />
      </div>

      <div>
        <h3>{name}</h3>
        <button onClick={removeFavorite}>Remover dos Favoritos</button>
      </div>
    </Container>
  )
}