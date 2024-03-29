import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Container } from "./styles";

export function SearchField() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState()

  function handleSearch(e) {
    e.preventDefault()
    navigate(`/search?q=${searchTerm}`)
  }

  return (
    <Container onSubmit={handleSearch}>
      <button type="submit">
        <MagnifyingGlass size={24} color="#c4c4cc" />
      </button>

      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
    </Container>
  )
}