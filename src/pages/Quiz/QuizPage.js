import QuizCategories from '../../components/Quiz/QuizCategories'
import Quiz from '../../components/Quiz/Quiz'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Background from '../../components/Particles/Background'

const QuizPage = () => {

  
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			<div className='quiz'>
			<Background/>
				<StyledQuiz>
					<QuizCategories />
					<Quiz />
				</StyledQuiz>
			</div>
		</motion.div>
	)
}

const StyledQuiz = styled.div`
	position: relative;
	top: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 28rem;
	border-radius: 5px;

	margin: 2rem auto;
	padding: 4rem 3rem 5rem 3rem;

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
`

export default QuizPage
