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
				</form>
			</div>
		</StyledOptForm>
	)
}

const favBlueBackground = '#4398ff'

const FaAngleDownRight = styled(FaAngleDown)`
	font-size: 1.25rem;
	color: white;
	transform-origin: center center;
	transform: rotate(-90deg);
`

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
          font-size: 1rem;
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
`

export default OptForm
