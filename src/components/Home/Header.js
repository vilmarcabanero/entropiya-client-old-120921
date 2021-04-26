import styled from 'styled-components'
import EntropiyaLogo from './EntropiyaLogo'

const Header = () => {
	return (
			<StyledHeader>
				<EntropiyaLogo/>
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
	padding-left: 2.5rem;
	padding-right: 3.5rem;
	width: 100%;


	@media (max-width: 76rem) {
		width: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	@media (max-width: 40rem) {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	/* .forButton {
		display: flex;

		@media (max-width: 55rem) {
			height: 1.875rem;
		}
	} */

	.button {
		font-size: ${fontA};
		background-color: white;
		color: black;
		height: 2.3rem;
		border: 1px solid ${jetColor};
		border-radius: 5px;
		padding: 0 0.75rem;
		&:hover {
			color: white;
			background-color: ${jetColor};
			border-color: white;
		}

		@media (max-width: 55rem) {
			font-size: 1rem;
			height: 2rem;
		}
	}

	> a > img {
		height: 4.375rem;
		&:hover {
			height: 4.205rem;
			margin: 0.085rem 0.225rem;
			opacity: 0.9;
		}
		//For mobile, set header height to 60px
		@media (max-width: 55rem) {
			height: 3.75rem;
			&:hover {
				height: 3.58rem;
				margin: 0.085rem 0.225rem;
			}
		}
	}
`

export default Header
