import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: none;
    border: none;
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`