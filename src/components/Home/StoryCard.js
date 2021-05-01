import styled from 'styled-components'
// import { Button } from '@material-ui/core';
import OptForm from './OptForm'
// import SignIn from '../pages/SignIn'

const Header = () => {
	return (
		<>
		<StyledStoryCard>
			<h1 className='title'>
				Online Review for <span>Board Exam.</span> 
			</h1>
			<h2 className='subtitle'>
				Video Lectures, Formulas, <span>Quizzes, and more.</span>
			</h2>
			<div className='form'>
				<h3>
					Ready to pass? Enter your email and try now  for free.
					{/* <span>30-day</span> free trial. */}
				</h3>
				<OptForm/>
			</div>
		</StyledStoryCard>
		{/* <SignIn/> */}
		</>
	)
}

// const primaryColor = '#0082e6'
// const fontA = '1.1rem'
// const containerColorBlack = '#262626'
// const jetColor = '#343434'
// const favBlueBackground = '#4398ff'

const StyledStoryCard = styled.nav`
	position: relative;
	top: 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 60rem; //Initial width, similar sa netflix which is 59.375 or 950 pixels

	margin: 4.75rem 0;
	margin-left: auto;
	margin-right: auto;
	color: white;

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

  @media (max-width: 30rem) {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
    margin: 0rem 0;
		top: 2rem;
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

    @media (max-width: 30rem) {
			font-size: 2rem;
		}
	}

	.subtitle {
		font-size: 1.75rem;
		/* max-width: 40rem; */
		text-align: center;
		margin: 1rem 6.5rem;
		span {
			display: inline-block;
		}

    @media (max-width: 30rem) {
			font-size: 1.125rem;
      width: 100%;
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

      @media (max-width: 30rem) {
			font-size: 1.1rem;
      width: 100%;
		}
		}

	}
`

export default Header
