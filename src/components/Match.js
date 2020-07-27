import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Match = ({ match, i }) => (
  <Link to={`/match/${match.id}`}>
    <StyledMatch>
      <p>{match.homeTeam.name} v {match.awayTeam.name}</p>
    </StyledMatch>
  </Link>
)

const StyledMatch = styled.div`
  width: 100%;
  background-color: #59D2FE;
  color: #4A7B9D;
  border: 2px solid #5C7AFF;
  margin: 0 0 20px;
  appearance: none;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  p {
    text-align: center;
    font-size: 32px;
    border: none;
  }
`

export default Match