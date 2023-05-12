import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 5px;

  font-size: clamp(9px, 3vw, 14px);

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }
`