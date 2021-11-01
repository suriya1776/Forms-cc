import React, { Component } from 'react'
import LoginPage from './Components/LoginPage'
import './App.css'
import Dataentry from './Components/Dataentry'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className=''>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route path='/dataentry' component={Dataentry} />
          </Switch>
        </div>
      </Router>
    )
  }
}
