import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 32px;

  padding-top: 24px;
  padding-bottom: 24px;

  padding-inline: clamp(24px, 8vw, 123px);

  grid-area: header;

  width: 100%;
  height: 104px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    text-align: center;
    width: 65%;
  }

  > a:nth-child(5) {
    max-width: 216px;
  }

  > button:last-child {
    border: none;
    background: none;
  }

  @media (max-width: 900px) {
    display: none;
  }
`