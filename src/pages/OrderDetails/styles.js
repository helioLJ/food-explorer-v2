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
  padding-top: 24px;
  padding-inline: clamp(24px, 8vw, 123px);
  padding-bottom: 24px;
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

    > div:first-child {
      width: 50%;
      display: flex;
      flex-direction: column;

      > span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-top: 18px;
      }

      > button:last-child {
        display: none;
        align-self: flex-end;
        max-width: 216px;
        margin-top: 47px;
      }
    }

    > div:last-child {
      width: 50%;
      height: 100%;

      .backButton {
        display: none;
      }

      .payment {
        width: 100%;
        max-width: 530px;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 8px;

        .payment-header {
          display: flex;
          align-items: flex-start;
          height: 81px;
          border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
          
          .pix {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            background: none;
            border: none;
            width: 50%;
            height: 100%;
            border-radius: 8px 0 0 0;
            background-color: ${({ theme, paymentoption }) => paymentoption == "pix" ? theme.COLORS.DARK_800 : "transparent"};
            border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .cc {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            background: none;
            border: none;
            width: 50%;
            height: 100%;
            border-radius: 0 8px 0 0;
            background-color: ${({ theme, paymentoption }) => paymentoption == "cc" ? theme.COLORS.DARK_800 : "transparent"};;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
        }

        .payment-body {
          padding: 50px 90px;
          justify-content: center;
          align-items: center;

          background-color: ${({ theme, paymentoption }) => paymentoption == "pix" ? theme.COLORS.DARK_1000 : "transparent"};

          .status-payment {
            text-align: center;

            p {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 700;
              font-size: 24px;
              line-height: 28px;
              text-align: center;

              color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }
          }

          .input-wrapper {
            width: 100%;

            label {
              font-family: 'Roboto';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 100%;
              color: ${({ theme }) => theme.COLORS.LIGHT_400};
              margin-bottom: 8px;
              display: block;
            }

            input {
              padding: 12px 14px;

              width: 100%;
              height: 48px;

              background-color: transparent;
              border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
              border-radius: 5px;
              color: ${({ theme }) => theme.COLORS.LIGHT_100};

              &:placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
              }
            }
          }

          .secondRow {
            margin-top: 37px;
            display: flex;
            gap: 17px;

            .input-wrapper {
              width: 50%;
            }
          }

          > button {
            margin-top: 50px;
          }
        }
      }
    }

    h2 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 32px;
    }
}

  @media (max-width: 800px) {
    padding: 36px 56px 36px;
    overflow-x: hidden;

    > section {
      width: 100%;
      position: relative;

      > div:first-child {
        width: 100%;

        button:last-child {
          display: block;
        }
      }

      > div:last-child {
        position: absolute;
        z-index: 99;
        transform: ${({ paymentflow }) => paymentflow === "pedido" ? "translateX(250%)" : "translateX(0%)"};
        transition: transform 0.2s;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        .backButton {
          display: block !important;
          margin-top: 32px;
          align-self: flex-end;
          max-width: 216px;
        }

        .payment-body {
          padding: 20px !important;
        }
      }
    }
  }
`