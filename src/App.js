import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css'
import { Home, Resume } from './pages'


const App = () => {

  return (
    <div id="main">

      <Router>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/resume' >
            <Resume />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
