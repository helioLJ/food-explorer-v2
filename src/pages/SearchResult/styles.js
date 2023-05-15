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

  > section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    gap: 48px;

    > div {
      justify-self: center;
    }
  }

  @media (max-width: 1600px) {
    > section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1160px) {
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