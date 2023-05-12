import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 104px 1fr 77px;
  grid-template-areas: "header"
  "content"
  "footer";

  height: 100vh;
`

export const Content = styled.main`
  grid-area: content;
  padding: 24px 121px 0px;
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
    margin-top: 42px;
    gap: 48px;

    h1 {
      margin-bottom: 32px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    form {
      display: flex;
      flex-direction: column;

      .image-container {
        width: 210px;
        height: 210px;
        z-index: 99;
        margin-bottom: 32px;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 50%;

        > img {
          border-radius: 50%;
          width: 210px;
          height: 210px;
          border: none;
        }
      }

      .rowOne {
        display: flex;
        gap: 32px;
        margin-bottom: 32px;
      }

      .rowTwo {
        display: flex;
        gap: 32px;
        margin-bottom: 32px;

        > div:last-child {
          max-width: 251px;
        }
      }

      .test-ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .buttons {
        align-self: flex-end;
        margin-top: 32px  ;
        display: flex;
        gap: 32px;

        button {
          width: auto;
        }

        button:first-child {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
      }
    }
  }

  @media (max-width: 800px) {
    padding: 36px 56px 50px;

    > section {
    }

    form {
      .rowOne, .rowTwo {
        flex-direction: column;
        div {
          max-width: none !important;
        }
      }

      .buttons {
        width: 100%;

        button {
          width: 50% !important;
        }
      }
    }
  }
`