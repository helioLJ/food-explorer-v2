import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 104px 1fr;
  grid-template-areas: "header"
  "content";

  height: 100vh;

  .main-container {
    grid-area: content;

    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
      border-radius: 8px;
    }
  }
`

export const Content = styled.main`
  padding-top: 164px;
  padding-inline: clamp(24px, 8vw, 123px);
  padding-bottom: 64px;

  .banner {
    display: flex;
    align-items: center;
    position: relative;

    width: 100%;
    height: clamp(120px, 20vw, 260px);

    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 8px;

    margin-bottom: 14px;

    div:nth-child(1)  {
      width: 50%;

      img:first-child {
        position: absolute;
        bottom: -13px;
        left: -50px;
        width: clamp(50%, 48vw, 656px);
        max-width: 656px;
      }

      img:last-child {
        display: none;
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      height: 100%;
      width: 50%;

      padding-top: clamp(36px, 5vw, 90px);
      padding-right: clamp(12px, 5vw, 100px);
      padding-bottom: clamp(22px, 5vw, 90px);
      padding-left: clamp(0px, 5vw, 12px);
        
      h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: clamp(18px, 4vw, 40px);
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin-bottom: clamp(3px, .7vw, 8px);
      }

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(12px, 1.4vw, 16px);
        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  }

  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .slick-dots li button:before {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > h2 {
    margin: 48px 0 23px;
  }

  .carouselContainer {
    position: relative;

    .shadowOne {
      position: absolute;
      width: 278px;
      height: 100%;
      left: -2px;
      top: 0px;

      background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
      transform: matrix(-1, 0, 0, 1, 0, 0);
      pointer-events: none;
      z-index: 99;
    }

    .shadowTwo {
      position: absolute;
      width: 278px;
      height: 100%;
      right: -2px;
      top: 0px;

      background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
      pointer-events: none;
    }
  }


  @media (max-width: 800px) {
    padding: 44px 26px 25px;

    .banner {

      div:nth-child(1)  {
        width: 40%;

        img:first-child {
          display: none;
        }

        img:last-child {
          position: absolute;
          bottom: 0px;
          left: -15px;
          display: block;
        }
      }

      div:nth-child(2)  {
        width: 60%;
        padding-right: 5px;
      }
    }

    .shadowOne, .shadowTwo {
      display: none;
    }
  }
`