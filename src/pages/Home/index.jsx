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
    autoplaySpeed: 2000,
    pauseOnHover: true,
    focusOnSelect: true,
  };

  const settingsRtl = {
    ...settings,
    rtl: true
  }

  return (
    <Container>
      <HeaderUser />
      <HeaderUserMobile />

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
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </Slider>
          <div className="shadowTwo"></div>
        </div>

        <h2>Sobremesas</h2>
        <div className="carouselContainer">
          <div className="shadowOne"></div>
          <Slider {...settingsRtl}>
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </Slider>
          <div className="shadowTwo"></div>
        </div>

        <h2>Bebidas</h2>
        <div className="carouselContainer">
          <div className="shadowOne"></div>
          <Slider {...settings}>
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </Slider>
          <div className="shadowTwo"></div>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}