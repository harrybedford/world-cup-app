import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Event = ({ event, i }) => (
  <Link to={`/world-cup/${event.year}`}>
    <StyledEvent key={i}>
      <h2>{ event.year }</h2>
      <h3>{ event.host[0].name }</h3>
    </StyledEvent>
  </Link>
)

const StyledEvent = styled.div`
  width: 20%;
  height: 200px;
  background-color: #59D2FE;
  color: #4A7B9D;
  border: 5px solid #5C7AFF;
  float: left;
  margin: 0 5% 50px 0;
  appearance: none;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px 2px #5C7AFF;
  }
  h2 {
    font-size: 100px;
    padding: 12px 0;
    text-align: center;
  }
  h3 {
    font-size: 32px;
    padding: 8px;
    text-align: center;
  }
`

export default Event