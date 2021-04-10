import React from 'react'
import logo from '../../assets/images/header.png'

const Header = () => {
  return (
    <header class='header bottom-shadow'>
      <nav class='flex flex-jc-sb flex-ai-c'>
          <a href='/' class='header__logo'>
          <img src={logo} alt="logo" />
          </a>

        <div class='header__links hide-for-mobile'>
        <a class="btn" href="/">Courses</a>
          <a class="btn" href="/">MCQs</a>
          <a class="btn" href="/">Quiz</a>
          <a class="btn" href="/">Formulas</a>
          <a class="btn" href="/">Formula Calculator</a>
        </div>

        <div class='flex flex-jc-sb flex-ai-c'>
          <a href='/' class='btn btn-outline-primary' id='hide-for-mobile'>Login</a>

          <a href='/' class='header__menu hide-for-desktop'>
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