import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Container } from "./styles";

export function SearchField() {
  const navigate = useNavigate()
  const location = useLocation()

  const [searchIngredient, setSearchIngredient] = useState("")

  function handleSearch() {
    console.log(location);
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