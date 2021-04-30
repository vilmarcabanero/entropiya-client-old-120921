import Header from '../components/Home/Header'
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
				<Header />
				<StoryCard />
			</div>
		</motion.div>
	)
}

export default Home
