import React from 'react';
import styled from 'styled-components';

const HeaderLinks: React.FC = () => {

  return (
    <StyledHeaderLinks>
      <a href="#">Courses</a>
      <a href="#">MCQs</a>
      <a href="#">Quiz</a>
      <a href="#">Formulas</a>
      <a href="#">Formula Calculator</a>
    </StyledHeaderLinks>
  );
}

const primaryColor = '#0082e6';
const celticBlue = '#246BCE';
const fontA = '1.1rem';

const StyledHeaderLinks = styled.div`
  display: flex;
  flex-flow: row;
  > a {
    padding: 1.2rem 1.3em 1.2rem 1.3rem;
    text-decoration: none;
    color: black;
    font-size: ${fontA};

    @media (max-width: 57rem) {
      padding: 1.2rem 0.7em 1.2rem 0.7rem;
    }
  
    @media (max-width: 55rem) {
      display: none;
    }

  
    &::after {
      position: relative;
      content: '';
      display: block;
      width: 0;
      height: 3px;
      background: ${primaryColor};
      transition: width .6s;
      bottom: -1.625rem;
    }
  
    &:hover {
      color: ${celticBlue};
    }
  
    &:hover::after {
      width: 100%;
      transition: width .6s;
    }
  
    &:not(:last-child) {
      margin-right: 2px;
    }
  }
`

export default HeaderLinks;
