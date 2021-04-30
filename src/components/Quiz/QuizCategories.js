import { useEffect, useState } from 'react';
import axios from 'axios';

const QuizCategories = () => {
	const [categories, setCategories] = useState([]);
	const fetchQuizCategories = async () => {
		const { data } = await axios.get(
			'https://opentdb.com/api.php?amount=10&category=19&difficulty=easy'
		);
		const formattedData = data.results.map(category => {
			const incorrectAnswersIndexes = category.incorrect_answers.length;
			const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0;
			category.incorrect_answers.splice(
				randomIndex,
				0,
				category.correct_answer
			);
			return {
				...category,
				answers: category.incorrect_answers,
			};
		});
		setCategories(formattedData);
	};

	useEffect(() => {
		fetchQuizCategories();
	}, []);

	// console.log({ categories })
	return <div>Quiz Categories</div>;
};

export default QuizCategories;
