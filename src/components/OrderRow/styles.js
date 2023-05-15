import styled from 'styled-components'

import SelectArrow from "../../assets/select-arrow.svg"

export const Container = styled.tr`
  td {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
 
    .select-container {
      > select {
        margin-top: 16px;
        padding: 16px;
        padding-left: 26px;

        width: 100%;
        height: 48px;

        border-radius: 5px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;

        display: flex;
        align-items: center;

        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        -webkit-appearance: none; 
        -moz-appearance: none; 
        appearance: none;
        background: url(${SelectArrow}) no-repeat 95% center; 
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        background-size: 15px 20px;
      }

      position: relative;

      .circle-admin {
        position: absolute;
        left: 10px;
        top: 20px;
        height: 8px;
        width: 8px;
        border-radius: 100%;

        background: ${({ theme, status }) => status === "Pendente" ? theme.COLORS.TOMATO_300 : status === "Preparando" ? theme.COLORS.CARROT_100 : theme.COLORS.MINT_100};
      }
}

  }

  td:first-child {

    .circle {
      height: 8px;
      width: 8px;
      border-radius: 100%;
      display: ${({ isadmin }) => isadmin ? "none" : "inline-block"};
      margin-right: 8px;

      background: ${({ theme, status }) => status === "Pendente" ? theme.COLORS.TOMATO_300 : status === "Preparando" ? theme.COLORS.CARROT_100 : theme.COLORS.MINT_100};
    }

  }
`