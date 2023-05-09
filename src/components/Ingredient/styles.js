import styled from 'styled-components'

export const Container = styled.div`
  display: inline;
  
  padding: 4px 8px;
  
  width: fit-content;
  height: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  
  border-radius: 5px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`