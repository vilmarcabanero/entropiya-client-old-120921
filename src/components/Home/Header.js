import React from 'react'
import NavBar from './NavBar';
import styled from 'styled-components';

// import './logic/header.js'

const Header = () => {

  return (
    <StyledHeader>
      <NavBar/>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  -webkit-box-shadow: 0 6px 4px -5px #888888;
  -moz-box-shadow: 0 6px 4px -5px #888888;
  box-shadow: 0 6px 4px -5px #888888;
`

export default Header