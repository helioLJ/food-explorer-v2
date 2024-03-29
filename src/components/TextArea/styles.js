import styled from 'styled-components'

export const Container = styled.div`
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

  > textarea {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    
    padding: 12px 14px;

    width: 100%;
    height: 100px;

    resize: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
      border-radius: 8px;
    }
  }
`