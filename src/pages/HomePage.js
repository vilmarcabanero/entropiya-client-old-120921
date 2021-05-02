import Header from '../components/Home/Header'
import EntropiyaLogo from '../components/Home/EntropiyaLogo'
import SignInButton from '../components/Home/SignInButton'
import StoryCard from '../components/Home/StoryCard'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/Particles/ParticleBackground'

const HomePage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{duration: 1}}
		>
			<div>
				{/* <Header /> */}
				<ParticleBackground />
				<div className='header'>
					<EntropiyaLogo />
				</div>
				<SignInButton/>
				<StoryCard />
			</div>
		</motion.div>
	)
}

export default HomePage
