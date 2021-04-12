import React from 'react';
import styled from 'styled-components';
import {FaAngleDown} from 'react-icons/fa'


const HeaderLinks: React.FC = () => {

  return (
    <StyledHeaderLinks className='headerlinks'>
      <a id='courses' href="#">Courses<StyledFaAngleDownCourses className='courses'/></a>
      <a id='mcqs' href="#">MCQs<StyledFaAngleDownMCQs className='mcqs'/></a> 
      <a id='quiz' href="#">Quiz<StyledFaAngleDownQuiz className='quiz'/></a>
      <a id='formulas' href="#">Formulas<StyledFaAngleDownFormulas className='formulas'/></a>
      <a id='formula-calculator' href="#">Formula Calculator<StyledFaAngleDownFormulaCalculator className='formula-calculator'/></a> 
    </StyledHeaderLinks>
  );
}

const primaryColor = '#0082e6';
const celticBlue = '#246BCE';
const fontA = '1.05rem';

// const Button = styled.button`
//   ${Wrapper}:hover & {
//     display: none;
//   }
// `;

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

const StyledFaAngleDownCourses = styled(FaAngleDown)`
  margin-left: 2px;
  font-size: 0.9rem;
  color: ${celticBlue};
`

const StyledFaAngleDownMCQs = styled(FaAngleDown)`
  margin-left: 2px;
  font-size: 0.9rem;
  color: ${celticBlue};
`


const StyledFaAngleDownQuiz = styled(FaAngleDown)`
  margin-left: 2px;
  font-size: 0.9rem;
  color: ${celticBlue};
`


const StyledFaAngleDownFormulas = styled(FaAngleDown)`
  margin-left: 2px;
  font-size: 0.9rem;
  color: ${celticBlue};
`


const StyledFaAngleDownFormulaCalculator = styled(FaAngleDown)`
  margin-left: 2px;
  font-size: 0.9rem;
  color: ${celticBlue};
`





export default HeaderLinks;
