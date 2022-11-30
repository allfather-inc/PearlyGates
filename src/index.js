import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './base.css'
import Demo1 from './demos/Demo1'
import Demo2 from './demos/Demo2'

// Demos inspired by:
// https://twitter.com/beesandbombs/status/1329796242298245124

function App () {
  return (
    <Router basename='/'>
      <div className='content'>
        <h2 className='content__title'>
          Allfather.
        </h2>
      </div>
      <div id='animation'>
        <Demo1 />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
