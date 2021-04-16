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
        <Navbar logo={logo} {...colorPalette} />
        <Switch>
          <Route exact path='/' >
            <Home {...colorPalette} />
          </Route>
          <Route path='/portfolio' >
            <Portfolio projects={projects} {...colorPalette} />
          </Route>
          <Route path='/contact'>
            <Contact {...colorPalette} />
          </Route>
          <Route path='/resume'>
            <Resume {...colorPalette} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
