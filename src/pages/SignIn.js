import SignIn from '../components/SignIn/SignIn'
import { motion } from 'framer-motion'

const App = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div>
				<SignIn />
			</div>
		</motion.div>
	)
}

export default App
