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
				const { data } = await axios.get('/api/private', config)
				setPrivateData(data.data)
			} catch (error) {
				localStorage.removeItem('authToken')
				setError('You are not authorized please login')
			}
		}

		fetchPrivateDate()
	}, [history])

	return error ? (
		<span className='error-message'>{error}</span>
	) : (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			<Styled>
				{/* <Header /> */}
				<ParticleBackground />
				<div className='header'>
					<EntropiyaLogo /><div className='private-data'>{privateData}</div><h1>Hello</h1>
				</div>
				<SignInButton className='button' />
				
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
		top: -8rem;
	}
`

export default ProfilePage
