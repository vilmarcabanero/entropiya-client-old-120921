import { useEffect, useState } from 'react'
import { econ } from '../../data/econ'
import MathJax from 'react-mathjax2'
// import parse from 'html-react-parser'


const Quiz = () => {


	
	const [categories, setCategories] = useState([])
	const fetchQuizCategories = () => {
		const formattedData = econ.map(category => {
			const incorrectAnswersIndexes = category.incorrect_answers.length
			const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0
			category.incorrect_answers.splice(randomIndex, 0, category.correct_answer)
			return {
				...category,
				answers: category.incorrect_answers,
			}
		})
		setCategories(formattedData)
	}

	useEffect(() => {
		fetchQuizCategories()
	}, [])

	console.log({ categories })

	// return <div>{parse(results[0].question)}</div>
	return (

	<div dangerouslySetInnerHTML={{ __html: econ[0].question }}></div>
	)
}

export default Quiz
