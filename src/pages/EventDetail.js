import React, { Fragment } from 'react'
import Match from '../components/Match'
import { matches } from '../mocks/matches'

const EventDetail = ({ event, matches }) => (
  <Fragment>
    <h2>{ event.name }</h2>
    {
      matches.map((match, i) => <Match match={match} i={i} />)
    }
  </Fragment>
)

EventDetail.defaultProps = {
  event: {
    name: `2018 FIFA World Cup Russia`,
  },
  matches: matches
}

export default EventDetail
