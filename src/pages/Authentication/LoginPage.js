import { useState, useEffect } from 'react'
import API from '../../api'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import usePasswordToggle from '../../hooks/usePasswordToggle'

import { motion } from 'framer-motion'
import Background from '../../components/Particles/Background'

const lightGray = '#D3D3D3'
const gainsboro = '#DCDCDC'

const LoginScreen = ({ history }) => {
	const [PasswordInputType, ToggleIcon] = usePasswordToggle()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('authToken')) {
			history.push('/')
		}
	}, [history])

	const loginHandler = async e => {
		e.preventDefault()

		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		}

		try {
			// const { data } = await axios
			// 	.post('https://entropiya-server.herokuapp.com/api/auth/login', { email, password }, config)
			// 	.then(setLoading(true))
			const { data } = await API.post(
				'auth/login',
				{ email, password },
				config
			).then(setLoading(true))

			localStorage.setItem('authToken', data.token)

			history.push('/')
		} catch (error) {
			setError(error.response.data.error)
			setTimeout(() => {
				setError('')
			}, 5000)
			setLoading(false)
		}
	}

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Background />
				<form onSubmit={loginHandler}>
					<Styled>
						<h1>Sign in</h1>

						<div className='flex'>
							<label className='custom-input'>
								<input
									type='text'
									className='email'
									placeholder=''
									required
									onChange={e => setEmail(e.target.value)}
									value={email}
								/>
								<span className='placeholder'>Email address</span>
							</label>
						</div>

						<div className='password-container'>
							<label className='custom-input'>
								<input
									className='password'
									placeholder=''
									type={PasswordInputType}
									required
									onChange={e => setPassword(e.target.value)}
									value={password}
								/>
								<span className='placeholder'>Password</span>
							</label>
							<div className='visibility'>{ToggleIcon}</div>
						</div>
						{/* <a href='/' className='forgot-password'>
				Forgot password?
			</a> */}
						<button type='submit' className='button'>
							{loading ? 'Signing in...' : 'Sign in'}
						</button>
						<div className='new'>
							<span>New to Entropiya? </span>{' '}
							<Link className='link' to='/register'>
								{' '}
								Sign up now
							</Link>
						</div>
						{error && <span className='error-message'>{error}</span>}
					</Styled>
				</form>
			</motion.div>
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
	z-index: 20;

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

	//begin
	h1 {
		font-size: 2rem;
		margin-left: 0.5rem;
		/* margin-bottom: 1.75rem; */
		margin-bottom: 3rem;
		align-self: flex-start;
		cursor: text;
		@media (max-width: 30rem) {
			font-size: 1.75rem;
			padding-left: 0.5rem;
			margin: 0 0 0.5rem 0;
		}
	}

	.error-message {
		width: 100%;
		display: inline-block;
		color: red;
		background-color: white;
		border-radius: 0 0 5px 5px;
		padding: 2px 6px;
		position: absolute;
		bottom: 0;
		text-align: center;
		font-weight: 500;
	}

	.custom-input {
		position: relative;
		width: 100%;
		margin-bottom: 0.5rem;
		padding-top: 1rem;
		&:hover {
			cursor: text;
		}

		.email {
			border-radius: 5px;
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

			&::-ms-reveal,
			&::-ms-clear {
				display: none;
			}

			&:valid + .placeholder,
			&:focus + .placeholder {
				top: 0px;
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
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0rem 0.5rem 1.1rem 1rem;

			position: absolute;
			width: 1rem;
			color: gray;
			opacity: 1.5;
			right: 0rem;
			bottom: 0.6rem;
			cursor: pointer;
			z-index: 20;

			&:hover {
				opacity: 0.75;
			}
		}
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
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

	.forgot-password {
		align-self: flex-start;
		margin-top: -1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		text-decoration: none;
		color: white;
		font-weight: 550;
		&:hover {
			opacity: 0.75;
		}
	}

	.new {
		padding-top: 1rem;
		padding-right: 0.75rem;
		align-self: flex-end;
		cursor: text;
		.link {
			text-decoration: none;
			color: white;
			font-weight: bold;
			padding-bottom: 0.1rem;
			&:hover {
				opacity: 0.75;
			}
		}
	}

	//Noselect
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`
export default LoginScreen
