import { Container, Content } from "./styles";

import Banner from "../../assets/banner.png"
import BannerMobile from "../../assets/banner-mobile.png"

import { HeaderUser } from "../../components/HeaderUser";
import { HeaderUserMobile } from "../../components/HeaderUserMobile";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow } from "../../components/SampleNextArrow";
import { SamplePrevArrow } from "../../components/SamplePrevArrow";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const settingsRtl = {
    ...settings,
    rtl: true
  }

  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function getMeals() {
      const response = await api.get("/dishes?category=Refei%C3%A7%C3%B5es")
      setMeals(response.data)
    }

    async function getDesserts() {
      const response = await api.get("/dishes?category=Sobremesas")
      setDesserts(response.data)
    }

    async function getDrinks() {
      const response = await api.get("/dishes?category=Bebidas")
      setDrinks(response.data)
    }

    getMeals()
    getDesserts()
    getDrinks()
  }, [])

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

      <div className="main-container">
        <Content>
          <section className="banner">
            <div>
              <img src={Banner} alt="Frutas, lanches e folhas" />
              <img src={BannerMobile} alt="Frutas, lanches e folhas" />
            </div>

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </section>

          <h2>Refeições</h2>
          <div className="carouselContainer">
            <div className="shadowOne"></div>
            <Slider {...settings}>
              {
                meals.map(meal => (
                  <DishCard
                    key={meal.id}
                    name={meal.name}
                    image_url={meal.image_url}
                    description={meal.description}
                    price={meal.price}
                    id={meal.id}
                  />
                ))
              }
            </Slider>
            <div className="shadowTwo"></div>
          </div>

          <h2>Sobremesas</h2>
          <div className="carouselContainer">
            <div className="shadowOne"></div>
            <Slider {...settingsRtl}>
              {
                desserts.map(dessert => (
                  <DishCard
                    key={dessert.id}
                    name={dessert.name}
                    image_url={dessert.image_url}
                    description={dessert.description}
                    price={dessert.price}
                    id={dessert.id}
                  />
                ))
              }
            </Slider>
            <div className="shadowTwo"></div>
          </div>

          <h2>Bebidas</h2>
          <div className="carouselContainer">
            <div className="shadowOne"></div>
            <Slider {...settings}>
              {
                drinks.map(drink => (
                  <DishCard
                    key={drink.id}
                    name={drink.name}
                    image_url={drink.image_url}
                    description={drink.description}
                    price={drink.price}
                    id={drink.id}
                  />
                ))
              }
            </Slider>
            <div className="shadowTwo"></div>
          </div>

        </Content>
        <Footer />
      </div>
    </Container>
  )
}