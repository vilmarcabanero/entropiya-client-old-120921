import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, Button } from '@material-ui/core'
import styled from 'styled-components'
import usePasswordToggle from './usePasswordToggle'

const darkGray = '#A9A9A9'
const gray = '808080'
const lightGray = '#D3D3D3'
const gainsboro = '#DCDCDC'

export default function SignUp() {
	const [PasswordInputType, ToggleIcon] = usePasswordToggle()

	return (
		<>
			<Styled>
				<h1>Create an account</h1>
					<div className='flex'>
						<label class='custom-input'>
							<input className='firstname' required />
							<span className='placeholder'>First name</span>
						</label>
						<label class='custom-input'>
							<input className='lastname' required />
							<span className='placeholder'>Last name</span>
						</label>
					</div>

					<div className='password-container'>
						<label class='custom-input'>
							<input className='password' type={PasswordInputType} required />
							<span className='placeholder'>Password</span>
						</label>
						<div className='visibility'>{ToggleIcon}</div>
					</div>

					<button>Sign up</button>
				<div>
					<div>
						<span>Already have an account? </span> <a href='/'> Sign in</a>
					</div>
				</div>
			</Styled>
		</>
	)
}

const Styled = styled.div`
	position: relative;
	margin: 5rem auto;
	/* width: 40rem; */
	/* width: 28rem; //sing in page */
	/* height: 40rem; */
	width: 25rem;
	padding-left: 4rem;
	padding-right: 4rem;
	padding-top: 3rem;
	padding-bottom: 5rem;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	/* background-color: #262626; */
	/* background-color: rgba(38, 38, 38, 0.75); */
	background-color: rgba(0, 0, 0, 0.5);
	color: white;

	@media (max-width: 46rem) {
		& {
			width: 22.5rem;
			position: relative;
			margin-top: 3rem;
			margin-bottom: 1.5rem;
			margin-left: auto;
			margin-right: auto;
		}
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 2.5rem;
	}
	.custom-input {
		position: relative;
		width: 100%;
		margin-bottom: 1.75rem;

		.firstname {
			border-radius: 0 0 0 5px;
		}

		.lastname {
			border-radius: 0 0 5px 0;
		}

		.password {
			border-radius: 5px;
			margin-bottom: 1rem;
		}

		input {
			font-size: 1rem;
			width: 100%;
			/* border-radius: 5px; */
			color: white;
			border-bottom: 1px solid ${gainsboro};
			height: 2rem;
			padding-left: 0.5rem;
			background-color: transparent;
			outline: none;
			border-top: none;
			border-left: none;
			border-right: none;

			&:valid + .placeholder,
			&:focus + .placeholder {
				top: -13px;
				font-size: 0.75rem;
				color: ${lightGray};
			}
		}

		.placeholder {
			font-size: 1rem;
			position: absolute;
			left: 0.5rem;
			top: 0.75rem;
			color: #aaa;
			transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
			cursor: text;
		}
	}

	.flex {
		display: flex;
		position: relative;
		width: 24.5rem;
		@media (max-width: 46rem) {
			& {
				width: 22rem;
			}
		}
	}

	.password-container {
		position: relative;
		display: flex;
		align-items: center;
		width: inherit;

		
		width: 24.5rem;
		@media (max-width: 46rem) {
			& {
				width: 22rem;
			}
		}

		.visibility {
			margin-bottom: 3.5rem;
			padding: 0.5rem 0 0.5rem 0;
			position: absolute;
			right: 0rem;
			cursor: pointer;
			z-index: 20;
		}

		
	}

	button {
		height: 2.75rem;
		width: 25rem;
		color: white;
		margin-right: auto;
		margin-left: auto;
		font-size: 1.2rem;
		background-color: #06f;
		border: 1px solid #06f;
		border-radius: 0.2rem;
		&:hover {
			font-size: 1.2rem;
			cursor: pointer;
			background-color: transparent;
		}

		@media (max-width: 46rem) {
			& {
				width: 22.5rem;
			}
		}
	}

	> div {
		> div {
			position: absolute;
			right: 4.5rem;
			margin-top: 0.75rem;
			> a {
				text-decoration: none;
				color: white;
				font-weight: 550;
				&:hover {
					opacity: 0.75;
				}
			}
		}
	}
`
