import React from 'react';
import styled from 'styled-components';

const RightNav = ({open}) => {
  return (
    <>
      
    <StyledRightNav open={open}>
      <li><a className="btn" href="/">Courses</a></li>
      <li><a className="btn" href="/">MCQs</a></li>
      <li><a className="btn" href="/">Quiz</a></li>
      <li><a className="btn" href="/">Formulas</a></li>
      <li><a className="btn" href="/">Formula Calculator</a></li>
      <li><button className='btn btn-outline-primary'>Login</button></li>
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
  padding: 2rem 2rem 0 2rem;

  > li {
    width: 100%;
    /* margin-left: 2em; */

    > a {
      &:hover {
      color: ${primaryColor};
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
  }

  @media (min-width: 55rem) {
    display: none
  }

  @media (max-width: 55rem) {
      flex-flow: column nowrap;
      background-color: white;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 4.8rem;
      right: ${({open}) => open ? '2%' : '-2%'};
      height: 20rem;
      width: 96%;
      border-radius: 5px 5px 5px 5px;
      /* padding-top: 1rem; */
      transition: transform 0.3s ease-in-out;
    }

`

export default RightNav;
