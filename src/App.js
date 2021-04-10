import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import { useState, useEffect } from 'react'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Navbar from './pages/components/Navbar'
import logo from './SeanLogo.png'

const App = () => {

  return (
    <div id="main">

      <Router>
        <Navbar logo={logo} />

        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/portfolio' >
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
