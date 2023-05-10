import styled from 'styled-components'

export const Container = styled.header`
  display: none;
  justify-content: space-between;
  align-items: center;
  gap: 34px;

  padding: 56px 28px 24px;

  grid-area: "header";

  width: 100%;
  height: 114px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  z-index: 999;

  > button {
    border: none;
    background: none;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`