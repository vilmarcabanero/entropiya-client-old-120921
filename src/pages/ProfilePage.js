import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../components/Home/Header'
import EntropiyaLogo from '../components/Home/EntropiyaLogo'
import SignInButton from '../components/Home/SignInButton'
import StoryCard from '../components/Home/StoryCard'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/Particles/ParticleBackground'
import styled from 'styled-components'

const ProfilePage = ({ history }) => {
	const [error, setError] = useState('')
	const [privateData, setPrivateData] = useState('')

	useEffect(() => {
		const fetchPrivateDate = async () => {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('authToken')}`,
				},
			}

			try {
				const { data } = await axios.get('https://entropiya-server.herokuapp.com/api/private', config)
				setPrivateData(data.data)
			} catch (error) {
				localStorage.removeItem('authToken')
				setError('You are not authorized please login')
			}
		}

		fetchPrivateDate()
	}, [history])

	const logoutHandler = () => {
		localStorage.removeItem('authToken')
		history.push('/login')
	}

	return error ? (
		<span className='error-message'>{error}</span>
	) : (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<Styled>
				{/* <Header /> */}
				<ParticleBackground />
				<div className='header'>
					<EntropiyaLogo />
					<div className='private-data'>{privateData}</div>
					<h1>Hello</h1>
				</div>
				<button className='button' onClick={logoutHandler}>
					Log out
				</button>
			</Styled>
		</motion.div>
	)
}

const Styled = styled.div`
	position: relative;
	top: 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%; //Initial width, similar sa netflix which is 59.375 or 950 pixels

	margin: 0rem 0;
	margin-left: auto;
	margin-right: auto;
	color: white;

	@media (max-width: 60rem) {
		width: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
	}

	@media (max-width: 40rem) {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}

	@media (max-width: 30rem) {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		margin: 0rem 0;
		top: 2rem;
	}

	.private-data {
		font-size: 1.2rem;
		color: white;
	}

	.button {
		position: absolute;
		right: 3rem;
		top: 1.25rem;
		display: flex;
		align-items: center;
		justify-self: flex-end !important;
		justify-content: center;
		font-size: 1.1rem;
		background-color: #06f;
		color: white;
		height: 2.3rem;
		border: 1px solid #06f;
		border-radius: 5px;
		padding: 0 0.75rem;
		text-decoration: none;

		@media (max-width: 30rem) {
			font-size: 1rem;
			height: 1.75rem;
			position: absolute;
			right: 1rem;
			top: -2.15rem;
		}
		&:hover {
			color: white;
			background-color: transparent;
			border-color: #06f;
		}
	}
`

export default ProfilePage
