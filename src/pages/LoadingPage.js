import Loading from '../components/Loading/Loading'
import Clock from '../components/Loading/Clock'
import { motion } from 'framer-motion'

const LoadingPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{duration: 0.25}}
		>
			<div>
					<Loading />
			</div>
		</motion.div>
	)
}

export default LoadingPage
