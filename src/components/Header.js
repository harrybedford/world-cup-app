import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <StyledHeader>
    <h1>The World Cup App</h1>
  </StyledHeader>
)

const StyledHeader = styled.header`
  width: 100%;
  height: 200px;
  padding: 62px;
  background-color: #5C7AFF;
  box-sizing: border-box;
  border-bottom: 5px solid #59D2FE;
  margin: 0 0 12px;
  h1 {
    font-size: 52px;
    text-align: center;
    font-family: Helvetica, sans-serif;
    padding: 12px;
    color: white;
  }
`

export default Header