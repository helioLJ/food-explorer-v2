import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  > p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`