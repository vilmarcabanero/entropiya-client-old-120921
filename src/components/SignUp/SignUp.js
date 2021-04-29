import React from 'react'
import styled from 'styled-components'
import usePasswordToggle from '../../hooks/usePasswordToggle'
import {Link} from 'react-router-dom'
import Header from './Header'

const darkGray = '#A9A9A9'
const gray = '808080'
const lightGray = '#D3D3D3'
const gainsboro = '#DCDCDC'

export default function SignUp() {
	const [PasswordInputType, ToggleIcon] = usePasswordToggle()

	return (
		<>
		<Header/>
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
				<div className='already'>
					<span>Already have an account? </span> <Link to='/signin'> Sign in</Link>
				</div>
			</Styled>
		</>
	)
}

const Styled = styled.div`
	/* width: 40rem; */
	/* width: 28rem; //sing in page */
	/* height: 40rem; */

	position: relative;
	top: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 28rem;
	border-radius: 5px;

	margin: 2rem auto;
	padding: 4rem 3rem 4rem 3rem;

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

	//begin
	h1 {
		font-size: 2rem;
		margin-left: 0.5rem;
		margin-bottom: 1.75rem;
		align-self: flex-start;
		@media (max-width: 30rem) {
			font-size: 1.75rem;
			padding-left: 0.5rem;
			margin: 0 0 0.5rem 0;
		}
	}
	.custom-input {
		position: relative;
		width: 100%;
		margin-bottom: 0.5rem;
		padding-top: 1rem;
		&:hover {
			cursor: text;
		}

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
				top: -3px;
				font-size: 0.75rem;
				color: ${lightGray};
			}
		}

		.placeholder {
			font-size: 1rem;
			position: absolute;
			left: 0.5rem;
			top: 1.3rem;
			color: #aaa;
			transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
			cursor: text;
		}
	}

	.flex {
		display: flex;
		position: relative;
		width: 100%;
	}

	.password-container {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;

		.visibility {
			padding: 1rem 0.5rem 1rem 1rem;
			position: absolute;
			color: gray;
			opacity: 1.5;
			right: 0rem;
			bottom: 0.6rem;
			cursor: pointer;
			z-index: 20;
		}
	}

	button {
		height: 2.75rem;
		width: 100%;
		color: white;
		margin-right: auto;
		margin-left: auto;
		margin-top: 1rem;
		font-size: 1.2rem;
		background-color: #06f;
		border: 1px solid #06f;
		border-radius: 0.2rem;
		&:hover {
			font-size: 1.2rem;
			cursor: pointer;
			background-color: transparent;
		}
	}

	//End

	.already {
		align-self: flex-end;
		margin-top: 1.25rem;
		> a {
			text-decoration: none;
			color: white;
			font-weight: 550;
			&:hover {
				opacity: 0.75;
			}
		}
	}
`
