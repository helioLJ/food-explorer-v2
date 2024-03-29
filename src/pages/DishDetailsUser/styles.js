import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 104px 1fr 77px;
  grid-template-areas: "header"
  "content"
  "footer";
  overflow: hidden;

  height: 100vh;
`

export const Content = styled.main`
  grid-area: content;
  padding: 24px 121px 24px;
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

  > section {
    display: flex;
    margin-top: 42px;
    gap: 48px;

    > div:nth-child(1) {
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > img {
        width: 400px;
        height: 400px;
        border-radius: 100%;
      }
    }

    > div:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 24px;
      }

      > p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 24px;
      }

      .ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .actionBtns {
        display: flex;
        gap: 33px;
        margin-top: 48px;
        
        > a {
          width: 172px;
        }

        > a:nth-child(3) {
          display: none;
        }
      }
    }
  }

  @media (max-width: 800px) {
    padding: 36px 56px;

    > section {
      flex-direction: column;
      margin-top: 16px;
      gap: 16px;

      > div:nth-child(1) {
        width: 100%;
        align-items: center;

        > img {
          width: 264px;
          height: 264px;
        }
      }

      > div:nth-child(2) {
        text-align: center;

        > h1 {
          font-size: 27px;
        }

        > p {
          font-size: 16px;
        }

        .ingredients {
          justify-content: center;
        }

        .actionBtns {
          > a:nth-child(1) {
            width: 100%;
          }

          > a:nth-child(3) {
            display: flex;
            width: 100%;
          }

          > a:nth-child(2) {
            display: none;
          }
        }
      }
    }
  }
`