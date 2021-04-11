import React from 'react';
import styled from 'styled-components';

const Burger: React.FC = () => {
  return (
    <BurgerStyle>
      Burger
    </BurgerStyle>
  );
}

const minLarge = '76em'

const BurgerStyle = styled.div`
  @media (min-width: ${minLarge}) {
    display: none
  }
`

export default Burger;
