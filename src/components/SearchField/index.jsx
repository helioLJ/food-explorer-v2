import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Container } from "./styles";

export function SearchField() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('q') || ''

  function navigateToSearch() {
    navigate(`/search?q=${searchTerm}`)
  }

  function handleSearch(e) {
    const q = e.target.value

    if (q) {
      setSearchParams({ q })
    } else {
      setSearchParams({})
    }
  }

  return (
    <Container onSubmit={navigateToSearch}>
      <button type="submit" onClick={navigateToSearch}>
        <MagnifyingGlass size={24} color="#c4c4cc" />
      </button>

      <input
        value={searchTerm}
        onChange={handleSearch}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
    </Container>
  )
}