import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
  z-index: 99;

  width: 100%;

  display: none;
  grid-template-rows: 114px 1fr;
  grid-template-areas: "header"
  "content";

  height: 100%;

  transform: ${({ isopen }) => (isopen === "true" ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 800px) {
    display: grid;
  }
`

export const HeaderMobile = styled.div`
  grid-area: header;
  width: 100%;
  height: 114px;

  padding: 56px 28px 24px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 16px;

    > p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 21.1629px;
      line-height: 25px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`

export const Content = styled.div`
  grid-area: content;

  padding: 36px 28px;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`

export const Nav = styled.nav`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  > button {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 140%;

    padding: 10px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    background: none;
    border: none;
    text-align: left;
  }
`

export const NavLink = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;

  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`