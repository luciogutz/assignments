import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './Home'
import User from './User'
import Contacts from './Contacts'

render(
  (
    <Router history={ hashHistory }>
      <Route component={ Contacts }>
        <Route path="/" component={ Home }/>
        <Route path="/User/:name/:email/:phone/:location" component={ User }/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
