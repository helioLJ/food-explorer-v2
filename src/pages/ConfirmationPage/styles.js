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


  @media (max-width: 800px) {
    padding: 36px 56px 36px;

  }
`