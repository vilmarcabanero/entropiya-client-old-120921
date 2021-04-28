import React from 'react'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'

const OptForm = () => {
	return (
		<StyledOptForm>
			<div class='form-section'>
				<form>
					<div class='input-group'>
						<input
							type='text'
							class='form-control'
							id=''
							required=''
							placeholder='Email address'
						/>

						<div class='input-group-append'>
							<button type='submit' class='submit'>
								<span>
									Enroll now <FaAngleDownRight />
								</span>
							</button>
						</div>
					</div>
					<div class='input-button-group'>
						<label>
							<input type='text' class='form-control' id='' required />

							<span className='placeholder'>Email address</span>
						</label>

						<div class='button-container'>
							<button type='submit' class='submit'>
								Enroll now <FaAngleDownRight className='arrow' />
							</button>
						</div>
					</div>
				</form>
			</div>
		</StyledOptForm>
	)
}

const favBlueBackground = '#4398ff'

const FaAngleDownRight = styled(FaAngleDown)``

const StyledOptForm = styled.div`
	.form-section form {
		position: relative;
		margin-top: 1rem;
		.input-group {
			input {
				height: 50px;
				font-size: 1.2rem;
				color: black;
				border: none;
				&::placeholder {
					font-size: 1.1rem;
				}

				@media (max-width: 30rem) {
					height: 35px;
					font-size: 0.95rem;
					&::placeholder {
						font-size: 0.95rem;
					}
				}
			}

			.submit {
				color: white;
				text-align: center;
				cursor: pointer;
				// width: 140px;
				width: 185px;
				padding: 0px 8px;
				border: none;
				outline: none;
				background-color: white;
				border-radius: 0px 4px 4px 0px;
				height: 50px;
				position: relative;

				@media (max-width: 30rem) {
					width: 130px;
					height: 35px;
				}

				> span {
					font-size: 1.5rem;
					display: block;
					background-color: #06f;
					height: 45px;
					position: absolute;
					// width: 130px;
					width: 175px;
					line-height: 41px;
					border-radius: 4px;
					padding-left: 0.4rem;
					top: 50%;
					transform: translatey(-50%);

					@media (min-width: 30rem) {
						&:hover {
							font-size: 1.35rem;
						}
						top: 49.5%;
					}

					@media (max-width: 30rem) {
						width: 120px;
						font-size: 1rem;
						height: 32px;
						line-height: 32px;
						&:hover {
							font-size: 0.9rem;
						}
					}
				}
			}
		}
	}

	.input-button-group {
		display: flex;
		margin-top: 2rem;

		label {
			position: relative;
			width: 100%;
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
						top: -1.5px;
						font-size: 0.65rem;
						color: black;
					}
				}
			}

			.placeholder {
				font-size: 1rem;
				position: absolute;
				left: 0.75rem;
				top: 1rem;
				color: #aaa;
				transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
				cursor: text;
				@media (max-width: 30rem) {
					top: 0.6rem;
					font-size: 0.9rem;
				}
			}
		}

		.button-container {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: white;
			height: 3.5rem;
			padding-right: 0.25rem;
			border-radius: 0 4px 4px 0;
			@media (max-width: 30rem) {
				height: 2.5rem;
				font-size: 0.95rem;
			}
		}

		button {
			color: white;
			text-align: center;
			cursor: pointer;
			// width: 140px;
			width: 10.5rem;
			padding: 0px 8px;
			border: none;
			outline: none;
			background-color: #06f;
			border-radius: 4px;
			height: 3rem;

			font-size: 1.3rem;

			@media (max-width: 30rem) {
				width: 7.6rem;
				height: 2rem;
				padding-left: 0.9rem;
				font-size: 1rem;
				.arrow {
					height: 1rem;
				}
			}

			@media (min-width: 30rem) {
				&:hover {
					background-color: transparent;
					border: 1px solid #06f;
					color: #06f;
					.arrow {
						color: #06f;
					}
				}
			}

			.arrow {
				font-size: 1.25rem;
				color: white;
				transform-origin: center center;
				transform: rotate(-90deg);
			}
		}
	}
`

export default OptForm
