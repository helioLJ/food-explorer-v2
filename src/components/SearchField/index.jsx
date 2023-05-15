import { MagnifyingGlass } from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { useState } from "react";

export function SearchField() {
  const navigate = useNavigate()

  const [searchIngredient, setSearchIngredient] = useState("")

  function handleSearch() {
    navigate({
      pathname: '/search',
      search: `?q=${searchIngredient}`
    })
  }

  return (
    <Container onSubmit={handleSearch}>
      <button type="submit" onClick={handleSearch}>
        <MagnifyingGlass size={24} color="#c4c4cc" />
      </button>

      <input value={searchIngredient} onChange={(e) => setSearchIngredient(e.target.value)} type="text" placeholder="Busque por pratos ou ingredientes" />
    </Container>
  )
}