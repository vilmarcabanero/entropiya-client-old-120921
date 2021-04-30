import SignUp from '../components/SignUp/SignUp'
import { motion } from 'framer-motion'

const App = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div>
				<SignUp />
			</div>
		</motion.div>
	)
}

export default App
