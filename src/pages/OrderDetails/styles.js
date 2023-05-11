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

      button:last-child {
        display: none;
        align-self: flex-end;
        max-width: 216px;
        margin-top: 47px;
      }
    }

    > div:last-child {
      width: 50%;

      .payment {
        width: 100%;
        max-width: 530px;
        height: 445px;
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
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cc {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            background: none;
            border: none;
            width: 50%;
            height: 100%;
            border-radius: 0 8px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
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
    padding: 36px 56px 0;

    > section {
      > div:first-child {
        width: 100%;

        button:last-child {
          display: block;

        }
      }

      > div:last-child {
        display: none;
      }
    }
  }
`