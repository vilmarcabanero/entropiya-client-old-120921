import React from 'react'
import styled from 'styled-components'
export default function Background() {
	return (
		<Styled>
			{/* <h3>Please refresh the page.</h3> */}
			{/* <div>
				<h3>Please refresh the page.</h3>
			</div> */}
		</Styled>
	)
}

const Styled = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #343434;

	z-index: 0;

	justify-content: center;
	align-items: center;
	color: white;

	> div {
		position: relative;
		top: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 20;
		height: 2rem;
		border-radius: 5px;

		margin: 2rem auto;
		padding: 2rem 3rem 2rem 3rem;

		/* background-color: #262626; */
		/* background-color: rgba(38, 38, 38, 0.75); */
		background-color: rgba(0, 0, 0, 0.5); //0.6 dati
		color: white;

		@media (max-width: 30rem) {
			width: 100%;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			margin: 0rem 0;
			padding-top: 0rem;
			background-color: transparent;
		}
	}
`
