import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useBodyColor from '../hooks/changeBgColor'

import '../css/navbar.css'


const Navbar = (props) => {

  // state to manage the current activePage
  const [locationState, setLocationState] = useState({
    activePage: '',
  })

  // when route "buttons" clicked, activePage is set to that "route"
  const handlePageClick = (event) => {
    setLocationState({ activePage: event.target.parentNode.id })
  }

  // grabs the current route path when hit and set's activePage to that route
    let location = useLocation()
    useEffect(() => {
      switch (location.pathname) {
        case '/':
          setLocationState({ activePage: 'about' })
          break;
        case '/portfolio':
          setLocationState({ activePage: 'portfolio' })
          break;
        case '/resume':
          setLocationState({ activePage: 'resume' })
          break;
        case '/contact':
          setLocationState({ activePage: 'contact' })
          break;
      }
    }, [])

  return (
    <nav className="navbar" >
      <div className="brand">

        <Link to='/' className="navbar-brand"  >
          <img src={props.logo} alt="logo" className="logo" />
          <div className="self">
            <h3>Sean</h3>
            <span>Full Stack Developer</span>
          </div>
        </Link>
      </div>

      <div className="pages">


        <Link to='/' id="about" className={`link ${locationState.activePage == 'about' ? 'active' : ''}`}>
          <h3 id="black" onClick={handlePageClick}>about</h3>
        </Link>

        <Link to='/portfolio' id="portfolio" className={`link ${locationState.activePage == 'portfolio' ? 'active' : ''}`}>
          <h3 onClick={handlePageClick}>Portfolio</h3>
        </Link>

        <Link to='/resume' id="resume" className={`link ${locationState.activePage == 'resume' ? 'active' : ''}`}>
          <h3 onClick={handlePageClick}>resume</h3>
        </Link>

        <Link to='/contact' id="contact" className={`link ${locationState.activePage == 'contact' ? 'active' : ''}`}>
          <h3 onClick={handlePageClick}>Contact</h3>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar
