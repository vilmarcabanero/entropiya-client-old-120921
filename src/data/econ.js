// `\\(  \\frac{x+y}{x-y}  \\)`
import {M} from '../components/Math'

let pi = `\\(\\pi\\)`
let theta = `\\(\\theta\\)`
let fraction = `\\(  \\frac{x+y}{x-y}  \\)`
let math = `${<M m='\pi'/>}`
let area = `\\(A = \\pi r^2\\)`
export const econ = [
	{
		category: `Science: Mathematics`,
		type: 'multiple',
		difficulty: 'easy',
		question: `What is the area of the circle? ${area} <br> <h1>What is the symbol of pi? ${math} ${pi} </h1>  theta = ${theta} <br> <h2> ${fraction} <h2/>`,
		correct_answer: '40',
		incorrect_answers: ['60', '15', '90'],
	},
	{
		category: 'Science: Mathematics',
		type: 'multiple',
		difficulty: 'easy',
		question: 'What&#039;s the square root of 49?',
		correct_answer: '7',
		incorrect_answers: ['4', '12', '9'],
	},
	{
		category: 'Science: Mathematics',
		type: 'boolean',
		difficulty: 'easy',
		question: 'A universal set, or a set that contains all sets, exists.',
		correct_answer: 'False',
		incorrect_answers: ['True'],
	},
	{
		category: 'Science: Mathematics',
		type: 'multiple',
		difficulty: 'easy',
		question: 'What is the symbol for Displacement?',
		correct_answer: '&Delta;r',
		incorrect_answers: ['dr', 'Dp', 'r'],
	},
	{
		category: 'Science: Mathematics',
		type: 'multiple',
		difficulty: 'easy',
		question: 'How many sides does a heptagon have?',
		correct_answer: '7',
		incorrect_answers: ['8', '6', '5'],
	},
	{
		category: 'Science: Mathematics',
		type: 'boolean',
		difficulty: 'easy',
		question: 'The sum of any two odd integers is odd.',
		correct_answer: 'False',
		incorrect_answers: ['True'],
	},
	{
		category: 'Science: Mathematics',
		type: 'multiple',
		difficulty: 'easy',
		question: 'What is the correct order of operations for solving equations?',
		correct_answer:
			'Parentheses, Exponents, Multiplication, Division, Addition, Subtraction',
		incorrect_answers: [
			'Addition, Multiplication, Division, Subtraction, Addition, Parentheses',
			'Parentheses, Exponents, Addition, Substraction, Multiplication, Division',
			'The order in which the operations are written.',
		],
	},
	{
		category: 'Science: Mathematics',
		type: 'boolean',
		difficulty: 'easy',
		question:
			'An isosceles triangle has two sides of equal length as opposed to three.',
		correct_answer: 'True',
		incorrect_answers: ['False'],
	},
	{
		category: 'Science: Mathematics',
		type: 'boolean',
		difficulty: 'easy',
		question:
			'An equilateral triangle always has every angle measuring 60&deg;.',
		correct_answer: 'True',
		incorrect_answers: ['False'],
	},
	{
		category: 'Science: Mathematics',
		type: 'multiple',
		difficulty: 'easy',
		question: 'How many sides does a trapezium have?',
		correct_answer: '4',
		incorrect_answers: ['3', '5', '6'],
	},
]
