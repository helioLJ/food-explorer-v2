import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  padding: 24px 123px;

  width: 100%;
  height: 77px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > img:nth-child(2) {
    display: none;
  }

  p > {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    text-align: right;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (max-width: 800px) {
    padding: 24px 28px;

  > img:nth-child(1) {
    display: none;
  }

  > img:nth-child(2) {
    display: block;
  }

  > p {
    font-size: 12px;
  }
  }
`