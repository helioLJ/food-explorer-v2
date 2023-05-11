import styled from 'styled-components'

import SelectArrow from "../../assets/select-arrow.svg"

export const Container = styled.div`
  width: 100%;
  max-width: 364px;

  > label {
    display: inline-block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin-bottom: 8px;
  }

  > select {
    width: 100%;
    height: 48px;

    border-radius: 8px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    -webkit-appearance: none; 
    -moz-appearance: none; 
    appearance: none;
    padding: 0.5em 2em 0.5em 1em;
    border: none;
    background: url(${SelectArrow}) no-repeat 95% center; 
    background-size: 20px 40px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
`