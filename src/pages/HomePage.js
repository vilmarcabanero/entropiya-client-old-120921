import EntropiyaLogo from '../components/Home/EntropiyaLogo'
import SignInButton from '../components/Home/SignInButton'
import StoryCard from '../components/Home/StoryCard'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/Particles/ParticleBackground'
import styled from 'styled-components'

const HomePage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Styled>
				{/* <Header /> */}
				<ParticleBackground />
				{/* <div className='header'>
					<EntropiyaLogo />
				</div>
				<SignInButton /> */}
				<StoryCard />
			</Styled>
		</motion.div>
	)
}

const Styled = styled.div`
	z-index: 20;
`

export default HomePage
