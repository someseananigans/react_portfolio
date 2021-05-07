import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css'
import { Home } from './pages'


const App = () => {

  return (
    <div id="main">

      <Router>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
