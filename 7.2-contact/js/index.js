import React from 'react'
import { Render } from 'react-dom'
import Home from './Home'
import User from './User'
import Contacts from './Contacts'

render(
  (
    <Router history={ hashHistory }>
      <Route component={ Contacts }>
        <Route path="/" component={ Home }/>
        <Route path="/User" component={ User }/>
      </Route>
    </Router>
  ),
  document.getElementByID('app')
)
