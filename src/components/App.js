import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// pages
import Events from '../pages/Events'
import EventDetail from '../pages/EventDetail'
import MatchDetail from '../pages/MatchDetail'
import Header from './Header'


const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Container>
      <Switch>
        <Route path="/world-cups" component={Events} />
        <Route path="/world-cup/:id" component={EventDetail} />
        <Route path="/match/:matchId" component={MatchDetail} />
      </Switch>
    </Container>
  </Fragment>
)

export default App

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

