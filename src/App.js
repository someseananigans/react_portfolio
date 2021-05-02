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
import Navbar from './components/Navbar'
import logo from './SeanLogo.png'

import { colorPalette, projects } from './Data'

const App = () => {

  return (
    <div id="main">

      <Router>
        <Switch>
          <Route exact path='/' >

          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
