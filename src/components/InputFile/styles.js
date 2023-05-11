import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 230px;

  > label {
    display: inline-block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin-bottom: 8px;
  }

  .input-wrapper {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
    gap: 14px;

    position: relative;
    
    width: 100%;
    height: 48px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    > input {
      height: 100%;
      width: 100%;
      z-index: 99;
      cursor: pointer;
      opacity: 0;
    }

    .input-content {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 8px;

      > p {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;;
      }
    }
  }
`