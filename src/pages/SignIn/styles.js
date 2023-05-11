import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo form";

  padding-inline: 18px;
  height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas: "logo"
    "form";
    padding-top: 140px;
  }
`

export const LogoContainer = styled.div`
  grid-area: logo;
  align-self: center;
  justify-self: center;

  > img {
    width: 100%;
    max-width: 325px;
  }

  @media (max-width: 800px) {
    > img {
      max-width: 225px;
    }
  }
`

export const FormContainer = styled.div`
  grid-area: form;
  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  padding: 64px;

  width: 100%;
  max-width: 476px;
  height: 621px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin-bottom: 32px;
  }

  > a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    text-align: center;
  }

  @media (max-width: 800px) {
    align-self: flex-start;
    padding: 0 32px 32px;
    justify-content: start;
    background-color: transparent;

    h1 {
      display: none;
    }
  }
`