import Header from '../components/Home/Header'
import EntropiyaLogo from '../components/Home/EntropiyaLogo'
import SignInButton from '../components/Home/SignInButton'
import StoryCard from '../components/Home/StoryCard'
import { motion } from 'framer-motion'

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{duration: 0.25}}
		>
			<div>
				{/* <Header /> */}

				<SignInButton/>
				<StoryCard />
			</div>
		</motion.div>
	)
}

export default Home
