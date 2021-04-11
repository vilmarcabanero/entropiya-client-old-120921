import React from 'react';
import styled from 'styled-components';

const HeaderLinks: React.FC = () => {

  return (
    <HLStyle>
      <a className="btn" href="/">Courses</a>
      <a className="btn" href="/">MCQs</a>
      <a className="btn" href="/">Quiz</a>
      <a className="btn" href="/">Formulas</a>
      <a className="btn" href="/">Formula Calculator</a>
    </HLStyle>
  );
}

const primaryColor = '#0082e6'
const celticBlue = '#246BCE';
const fontA = '1.1rem';
const maxMedium = '75.9375em'

const HLStyle = styled.div`
  > a {
    font-size: ${fontA};
  
    @media (max-width: ${maxMedium}) {
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
