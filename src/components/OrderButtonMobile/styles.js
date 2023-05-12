import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  position: relative;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px 12px;

    position: absolute;
    top: -8px;
    left: 16px;

    width: 20px;
    height: 20px;

    border-radius: 99px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};

    > p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      display: flex;
      align-items: center;
      text-align: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`