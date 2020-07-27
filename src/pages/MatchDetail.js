import React, { Fragment } from 'react'
import styled from 'styled-components'
import Query from 'react-apollo'

const MatchDetail = ({ match = {} }) => (
  <Fragment>
    <HomeTeam>
      { match.homeTeam.name }
    </HomeTeam>
    <HomeScore>
      { match.homeScore }
    </HomeScore>
    <AwayScore>
      { match.awayScore }
    </AwayScore>
    <AwayTeam>
      { match.awayTeam.name }
    </AwayTeam>
  </Fragment>
)

const WithData = () => (<MatchDetail match={matchData} />)

// const WithActualData = () => (
//   <Query query={MATCH_QUERY} variables={{ matchId }}>
//     {({ loading, error, data }) => {
//       if (loading) return 'Loading...'
//       if (error) return `Error! ${error.message}`

//       return data.matches[0]
//     }}
//   </Query>
// )

export default WithData

// export const MATCH_QUERY = gql`
//   query match($matchId: Int!) {
//     matches(id: $matchId) {
//       homeTeam {
//         name
//       }
//       homeScore
//       awayTeam {
//         name
//       }
//       awayScore
//       id
//       worldCup {
//         year
//       }
//     }
//   }
// `

const matchData = {
  "homeTeam": {
    "name": "Brazil"
  },
  "homeScore": 1,
  "awayTeam": {
    "name": "Belgium"
  },
  "awayScore": 2,
  "id": 300331538,
  "worldCup": {
    "year": 2018
  }
}

const HomeTeam = styled.div`
  width: 38%;
  height: 100px;
  float: left;
  text-align: right;
  background-color: #59D2FE;
  color: #4A7B9D;
  border: 5px solid #5C7AFF;
  float: left;
  appearance: none;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  padding: 20px;
  margin-right: 1%;
`

const AwayTeam = styled.div`
  width: 38%;
  height: 100px;
  float: left;
  background-color: #59D2FE;
  color: #4A7B9D;
  border: 5px solid #5C7AFF;
  float: left;
  appearance: none;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  padding: 20px;
  margin-left: 1%;
`

const HomeScore = styled.div`
  width: 10%;
  height: 100px;
  float: left;
  text-align: center;
  background-color: #59D2FE;
  color: #4A7B9D;
  border: 5px solid #5C7AFF;
  float: left;
  appearance: none;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  padding: 20px;
  margin-right: 1%;
`

const AwayScore = styled.div`
  width: 10%;
  height: 100px;
  float: left;
  text-align: center;
  background-color: #59D2FE;
  color: #4A7B9D;
  border: 5px solid #5C7AFF;
  float: left;
  appearance: none;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  padding: 20px;
  margin-left: 1%;
`