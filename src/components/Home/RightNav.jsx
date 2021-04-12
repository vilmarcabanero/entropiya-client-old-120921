import React from 'react';
import styled from 'styled-components';

const RightNav = ({open}) => {
  return (
    <>
      
    <StyledRightNav open={open}>
      <a href="#">Courses</a>
      <a href="#">MCQs</a>
      <a href="#">Quiz</a>
      <a href="#">Formulas</a>
      <a href="#">Formula Calculator</a>
      <button className='btn btn-outline-primary'>Login</button>
    </StyledRightNav>
    </>
  )
}

const primaryColor = '#0082e6';

const StyledRightNav = styled.div`
  list-style: none; 
  display: flex;
  box-shadow: 0px 5px 15px 0px #888888;
  align-items: flex-start;
  padding: 2rem;
  flex-flow: column;
  background-color: white;
  position: fixed;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 4.8rem;
  right: ${({open}) => open ? '2%' : '-10%'};
  width: 96%;
  border-radius: 5px;
  /* padding-top: 1rem; */
  transition: transform 0.3s ease-in-out;

    > a {
      text-decoration: none;
      color: black;
      padding-bottom: 0.5rem;
      width: 100%;

      &:hover {
      color: ${primaryColor};
      font-weight: bold;
      }
    }
    > button {
      margin-top: 1em;
      width: 100%;
      background-color: ${primaryColor};
      color: white;

      &:hover {
        color: ${primaryColor};
        background-color: white;
      }
    }

  @media (min-width: 55rem) {
    display: none
  }

`

export default RightNav;