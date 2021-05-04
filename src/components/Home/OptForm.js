import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

let userEmailFromInput = ''

const OptForm = () => {
	return (
		<StyledOptForm>
			<div className='input-button-group'>
				{/* <label>
						<input
							type='text'
							className='form-control'
							id=''
							required
						/>
 
						<span className='placeholder'>Email address</span>
					</label> */}

				<div className='button-container'>
					<Link to='/register' className='button'>
						Register now for free
						<FaAngleDownRight className='arrow' />
					</Link>
				</div>
			</div>
		</StyledOptForm>
	)
}

// const favBlueBackground = '#4398ff'
const jetColor = '#343434'

const FaAngleDownRight = styled(FaAngleDown)``

const StyledOptForm = styled.div`
	.input-button-group {
		position: relative;
		display: flex;
		margin-top: 2rem;
		background-color: transparent;

		label {
			position: relative;
			width: 100%;
			background-color: transparent;
			input {
				height: 3.5rem;
				color: black;
				font-size: 1rem;
				outline: none !important;
				border: none;
				appearance: none;
				box-shadow: none;
				padding-bottom: 0px;
				border-radius: 4px 0 0 4px;
				&:valid + .placeholder,
				&:focus + .placeholder {
					top: 0px;
					font-size: 0.75rem;
					color: black;
				}

				@media (max-width: 30rem) {
					height: 2.5rem;
					font-size: 0.95rem;
					&:valid + .placeholder,
					&:focus + .placeholder {
						top: 0px;
						font-size: 0.65rem;
						color: black;
						opacity: 0.9;
					}
				}
			}

			.placeholder {
				font-size: 1rem;
				position: absolute;
				left: 0.75rem;
				top: 1rem;
				color: ${jetColor};
				opacity: 0.8;
				transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
				cursor: text;
				@media (max-width: 30rem) {
					top: 0.6rem;
					font-size: 0.9rem;
				}
			}
		}

		.button-container {
			width: 20rem;
			margin-left: auto;
			margin-right: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			/* background-color: white; */
			background-color: transparent;
			height: 3.5rem;
			padding-right: 0.25rem;
			border-radius: 0 4px 4px 0;
			@media (max-width: 30rem) {
				height: 2.5rem;
				font-size: 0.95rem;
			}
		}

		.button {
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			text-decoration: none;
			cursor: pointer;
			// width: 140px;
			/* width: 10.5rem; */
			width: 100%;
			padding: 0px 8px;
			border: none;
			outline: none;
			background-color: #06f;
			border-radius: 4px;
			height: 3rem;

			font-size: 1.3rem;

			.arrow {
				color: white;
				margin-left: 0.5rem;
			}

			&:hover {
				background-color: transparent;
				border: 1px solid #06f;
				color: white;
				.arrow {
					color: white;
				}
			}

			@media (max-width: 30rem) {
				width: 15rem;
				height: 2rem;
				padding-left: 0.9rem;
				font-size: 1rem;
				.arrow {
					height: 1rem;
					margin-left: 0.1rem;
				}
			}

			/* @media (min-width: 30rem) {

			} */

			.arrow {
				font-size: 1.25rem;
				color: white;
				margin-top: 0.3rem;
				transform-origin: center center;
				transform: rotate(-90deg);
			}
		}

		.error-message {
			position: absolute;
			margin-bottom: -2.85rem;
			bottom: 0;

			width: 100%;
			display: inline-block;
			color: red;
			background-color: white;
			border-radius: 0 0 5px 5px;
			padding: 2px 6px;
			text-align: center;
			font-weight: 500;
		}
	}
`

export default OptForm

export const userEmail = userEmailFromInput
