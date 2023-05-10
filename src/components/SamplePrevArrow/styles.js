import styled from 'styled-components'

export const Container = styled.button`
  position: absolute;
  
  top: 50%;
  left: 30px;
  width: 20px;
  height: 20px;
  padding: 0;

  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  cursor: pointer;
  border: none;
  outline: none;
  background: none;

  z-index: 99;

  @media (max-width: 800px) {
    display: none;
  }
`

