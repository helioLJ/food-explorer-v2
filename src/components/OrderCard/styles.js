import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  padding: 16px 0px;

  width: 100%;
  max-width: 483px;
  height: 104px;

  > div:first-child {
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }
  }

  > div:last-child {
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        padding-left: 10px;
      }
    }

    button {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.TOMATO_400};

      background: none;
      border: none;
    }
  }
`