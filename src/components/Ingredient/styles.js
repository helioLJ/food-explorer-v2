import styled from 'styled-components'

export const Container = styled.div`
  height: 32px;
  position: relative;
  width: auto;
  
  > input {
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    
    padding: 8px 16px;
    
    border-radius: 8px;

    height: 100%;
    width: 100%;
  }

  > button {
    position: absolute;
    top: 6.5px;
    right: 15px;
    background: none;
    border: none;
  }
`