import styled from 'styled-components'

import SelectArrow from "../../assets/select-arrow.svg"

export const Container = styled.div`
  padding: 24px 20px;
  margin-bottom: 15px;

  width: 100%;
  height: auto;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: ${({ isadmin }) => isadmin ? "flex-start" : "space-between"};
    gap: 8px;

    > p:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 8px;

      .circle {
        height: 8px;
        width: 8px;
        border-radius: 100%;

        background: ${({ theme, status }) => status === "Pendente" ? theme.COLORS.TOMATO_300 : status === "Preparando" ? theme.COLORS.CARROT_100 : theme.COLORS.MINT_100};
      }
    }
  }

  > p:nth-child(2) {
    height: calc(100% - 38px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-top: 16px;
  }

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

    .circle {
      position: absolute;
      left: 10px;
      top: 20px;
      height: 8px;
      width: 8px;
      border-radius: 100%;

      background: ${({ theme, status }) => status === "Pendente" ? theme.COLORS.TOMATO_300 : status === "Preparando" ? theme.COLORS.CARROT_100 : theme.COLORS.MINT_100};
    }
}

`