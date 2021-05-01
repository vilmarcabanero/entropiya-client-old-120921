import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import backgroundParams from './backgroundParams'

export default function Background() {
	return (
		<StyledParticles>
			<Particles className='particles' params={backgroundParams}></Particles>
		</StyledParticles>
		
	)
}

const StyledParticles = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #343434;

	.particles {
		width: 100%;
		height: 110vh;
	}
`
