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

  > h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 32px;
  }

  .mobileOrders {
    display: none;
  }

  .container-border {
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    td, th {
      border: 3px solid;
      border-color: ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 20px;
      text-align: left;
    }

    th {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  @media (max-width: 800px) {
    padding: 36px 28px 0;

    .mobileOrders {
      display: block;
    }

    .container-border {
      display: none;
    }
  }
`