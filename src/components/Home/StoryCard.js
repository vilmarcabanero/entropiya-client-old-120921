import styled from 'styled-components'
import EntropiyaLogo from './EntropiyaLogo'
// import { Button } from '@material-ui/core';
import OptForm from './OptForm'

const Header = () => {
	return (
		<StyledStoryCard>
			<h1 className='title'>
				Online Review for Licensure Exam.
			</h1>
			<h2 className='subtitle'>
				Video Lectures, Quizzes, Formulas and more.
			</h2>
			<div className='form'>
				<h3>
					Ready to learn? Enter your email to start your{' '}
					<span>30-day</span> free trial.
				</h3>
				<OptForm/>
			</div>
		</StyledStoryCard>
	)
}

const primaryColor = '#0082e6'
const fontA = '1.1rem'
const containerColorBlack = '#262626'
const jetColor = '#343434'
// const favBlueBackground = '#4398ff'

const StyledStoryCard = styled.nav`
	position: relative;
	top: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 60rem; //Initial width, similar sa netflix which is 59.375 or 950 pixels

	padding: 4.75rem 0;
	margin-left: auto;
	margin-right: auto;
	color: white;
	/* background-color: ${jetColor}; */

	@media (max-width: 60rem) {
		width: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	@media (max-width: 40rem) {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	@media (max-width: 22.5rem) {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	.title {
		font-size: 4rem;
		max-width: 40rem;
		text-align: center;
		span {
			display: inline-block;
		}
		@media (max-width: 90.625rem) {
			font-size: 3.125rem;
		}
	}

	.subtitle {
		font-size: 1.75rem;
		max-width: 40rem;
		text-align: center;
		margin: 1rem 6.5rem;
		span {
			display: inline-block;
		}
	}

	.form {
		h3 {
			font-size: 1.2rem;
			max-width: 40rem;
			text-align: center;
			span {
				display: inline-block;
			}
		}
	}
`

export default Header
