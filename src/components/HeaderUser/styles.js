import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 32px;

  padding-top: 24px;
  padding-bottom: 24px;

  padding-inline: clamp(24px, 8vw, 123px);

  grid-area: "header";

  width: 100%;
  height: 104px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > button:last-child {
    border: none;
    background: none;
  }

  @media (max-width: 800px) {
    display: none;
  }
`