import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

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
    flex-wrap: wrap;
    gap: 16px;
    
    padding: 8px;

    width: 100%;
    height: auto;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
`