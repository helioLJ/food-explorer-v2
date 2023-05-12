import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 24px 24px 46px;

  width: 304px;
  margin-right: 30px;
  height: 462px;

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  
  background: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  > img {
    width: 176px;
    height: 176px;
    border-radius: 50%;
  }

  > a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  .cardBtns {
    display: flex;
    gap: 16px;
  }

  .favorite {
    position: absolute;
    top: 15px;
    right: 15px;

    background: none;
    border: none;
  }

  .favorite svg {
    transition: fill 0.2s;
  }

  .favorite:hover svg {
    fill: ${({ theme }) => theme.COLORS.TOMATO_300};
  }
  
  @media (max-width: 800px) {
    gap: 12px;

    padding: 24px;
    
    width: 210px;
    height: 320px;

    > img {
      width: 88px;
      height: 88px;
    }

    > a {
      font-size: 14px;
    }

    > p {
      display: none;
    }

    > span {
      font-size: 16px;
    }

    .cardBtns {
      flex-direction: column;
      align-items: center;

      button {
        height: 42px;
      }
    }
  }
`