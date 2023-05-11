import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 104px 1fr 77px;
  grid-template-areas: "header"
  "content"
  "footer";

  height: 100vh;
`

export const Content = styled.main`
  grid-area: content;
  padding-top: 24px;
  padding-inline: clamp(24px, 8vw, 123px);
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
    border-radius: 8px;
  }

  > h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 32px;
  }

  > section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto; /* Repete as linhas com altura automática */
    gap: 48px;
  }

  @media (max-width: 1600px) {
    > section {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1270px) {
    > section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 942px) {
    > section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    > section {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 800px) {
    padding: 36px 56px 0;

    > section {
      gap: 16px;
    }
  }
`