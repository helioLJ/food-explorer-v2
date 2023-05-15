import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0px;
  gap: 13px;

  width: 100%;
  max-width: 231px;
  height: 104px;

  > div:nth-child(1) {
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }
  }

  > div:nth-child(2) {
    h3 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    button {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      
      color: ${({ theme }) => theme.COLORS.TOMATO_400};

      border: none;
      background: none;
    }
  }
`