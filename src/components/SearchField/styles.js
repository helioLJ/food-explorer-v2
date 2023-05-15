import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;

  width: 100%;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  border-radius: 5px;

  > button:first-child {
    background: none;
    border: none;
    margin-bottom: -6px;
  }

  > input {
    width: 80%;
    height: 100%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`