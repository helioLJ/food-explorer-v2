import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 12px 32px;

  max-width: 216px;
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 5px;

  > p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`