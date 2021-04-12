import React from 'react';
import styled from 'styled-components';

const RightNav = ({open}) => {
  return (
    <>
      
    <StyledRightNav open={open}>
      <li><button className='btn btn-outline-primary'>Login</button></li>
      <li><a className="btn" href="/">Courses</a></li>
      <li><a className="btn" href="/">MCQs</a></li>
      <li><a className="btn" href="/">Quiz</a></li>
      <li><a className="btn" href="/">Formulas</a></li>
      <li><a className="btn" href="/">Formula Calculator</a></li>
    </StyledRightNav>
    </>
  )
}

const primaryColor = '#0082e6';

const StyledRightNav = styled.div`
  list-style: none; 
  display: flex;
  flex-flow: row nowrap;
  box-shadow: 0px 0px 15px 0px #888888;

  > li {
    margin-left: 2em;
    > button {
      margin-left: 0.8em;
      margin-top: -4em;
      background-color: ${primaryColor};
      color: white;

      &:hover {
        color: ${primaryColor};
        background-color: white;
      }
    } 
  }

  @media (min-width: 55rem) {
    display: none
  }

  @media (max-width: 55rem) {
      flex-flow: column nowrap;
      background-color: white;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 17rem;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
    }

`

export default RightNav;
