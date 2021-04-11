import React from 'react'
import logo from '../../assets/images/header.png'
// import './logic/header.js'

const Header: React.FC = () => {

  return (
    <header className='header bottom-shadow'>
      <nav className='flex flex-jc-sb flex-ai-c'>
          <a href='/' className='header__logo'>
          <img src={logo} alt="logo" />
          </a>

        <div className='header__links hide-for-mobile'>
        <a className="btn" href="/">Courses</a>
          <a className="btn" href="/">MCQs</a>
          <a className="btn" href="/">Quiz</a>
          <a className="btn" href="/">Formulas</a>
          <a className="btn" href="/">Formula Calculator</a>
        </div>

        <div className='flex flex-jc-sb flex-ai-c'>
          <button className='btn btn-outline-primary' id='hide-for-mobile'>Login</button>

          <a id='btnHamburger' href='/' className='header__menu hide-for-desktop'>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

      </nav>
        
    </header>

  )
}

export default Header