import React from 'react'
import styled from 'styled-components'



const Hero: React.FC = () => {
  return (
    <HeroStyle>
    </HeroStyle>
  )
}

const veryLightGray = 'hsl(0, 0%, 98%)'

const HeroStyle = styled.header`
  background-color: ${veryLightGray};
  width: 100%;
  height: 500px;
`

export default Hero