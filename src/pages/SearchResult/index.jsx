import { useEffect, useState } from "react";

import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";

import { Container, Content } from "./styles";

import { api } from "../../services/api";
import { useLocation, useSearchParams } from "react-router-dom";

export function SearchResult() {
  // const location = useLocation();
  // const urlSearchParams = new URLSearchParams(location.search);
  // const searchTerm = urlSearchParams.get('q') || '';
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('q') || ''

  const [data, setData] = useState(null)

  async function fetchDishes() {
    const { data } = await api.get(`dishes?ingredient=${searchTerm}`)
    setData(data)
  }

  useEffect(() => {
    fetchDishes()
  }, [searchParams])

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <Content>
        <section>
          {
            data && data.map(dish => (
              <DishCard
                key={dish.id}
                name={dish.name}
                image_url={dish.image_url}
                description={dish.description}
                price={dish.price}
                id={dish.id}
              />
            ))
          }
        </section>
      </Content>

      <Footer />
    </Container>
  )
}