import React from 'react'
import logo from '../../assets/images/header.png'
import HeaderLinks from './HeaderLinks';
import Burger from './Burger'
// import './logic/header.js'

const Header = () => {


  return (
    <header className='header bottom-shadow'>
      <nav className='flex flex-jc-sb flex-ai-c'>
        <a href='/'>
          <img src={logo} alt="logo" />
        </a>
        <HeaderLinks/>
        <button className='btn'>Login</button>
        <Burger/>
      </nav>
        
    </header>

  )
}

export default Header