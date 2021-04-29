import styled from 'styled-components'
import EntropiyaLogo from './EntropiyaLogo'
// import { Button } from '@material-ui/core';

const Header = () => {
	return (
		<StyledHeader>
			<EntropiyaLogo />
			<button className='button'>Sign in</button>
		</StyledHeader>
	)
}

const primaryColor = '#0082e6'
const fontA = '1.1rem'
// const containerColorBlack = '#262626'
const jetColor = '#343434'
// const favBlueBackground = '#4398ff'

const StyledHeader = styled.nav`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-top: 1rem;
	padding-left: 2rem;
	padding-right: 3rem;
	width: 100%;

	@media (max-width: 76rem) {
		width: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	@media (max-width: 46rem) {
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
	}

	/* .forButton {
		display: flex;

		@media (max-width: 55rem) {
			height: 1.875rem;
		}
	} */

	.button {
		font-size: ${fontA};
		background-color: #06f;
		color: white;
		height: 2.3rem;
		border: 1px solid #06f;
		border-radius: 5px;
		padding: 0 0.75rem;
		@media (max-width: 46rem) {
			position: absolute;
			right: 1rem;
		}
		&:hover {
			color: #06f;
			background-color: white;
			border-color: #06f;
		}

		@media (max-width: 30rem) {
			font-size: 1rem;
			height: 1.75rem;
		}
	}
`

export default Header
