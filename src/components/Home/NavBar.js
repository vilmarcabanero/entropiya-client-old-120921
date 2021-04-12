import React from 'react';
import logo from '../../assets/images/header.png'
import HeaderLinks from './HeaderLinks';
import Burger from './Burger';
import styled from 'styled-components';

const NavBar= () => {
  return (
    <>
    <StyledNavBar>
        <a href='#'>
          <img src={logo} alt="logo" />
        </a>
        <HeaderLinks/>
        <button className='btn btn-outline-primary'>Login</button>
        <Burger/>
    </StyledNavBar>
    </>
  );
}

const primaryColor = '#0082e6'
const fontA = '1.1rem'


const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 1.5rem; 
    padding-right: 1.5rem;
    padding-bottom: 0.35rem;
    margin: 0.3rem auto;
    width: 76rem;

    @media (max-width: 76rem) {
      width: 100%;
      padding-left: 2rem; 
      padding-right: 2rem;
    }


    @media (max-width: 40rem) {
      width: 100%;
      padding-left: 1.5rem; 
      padding-right: 1.5rem;
    }

    > button {
      font-size: ${fontA};
      background-color: ${primaryColor};
      color: white;
      &:hover {
        color: ${primaryColor};
        background-color: white;
        
      }
      @media (max-width: 55rem) {
        display: none;
      }
    }

    > a > img {
      height: 4.375rem;
      &:hover {
        height: 4.205rem;
        margin: 0.085rem 0.225rem;
        opacity: 0.9;
      }
      //For mobile, set header height to 60px 
      @media (max-width: 55rem) {
        height: 3.75rem;
        &:hover {
          height: 3.58rem;
          margin: 0.085rem 0.225rem;
        }
      }
    }
`

export default NavBar;
