import SignUp from '../../components/Authentication/SignUp'
import EntropiyaLogo from '../../components/Home/EntropiyaLogo'
import { motion } from 'framer-motion'

const App = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			<div>


				<SignUp />
			</div>
		</motion.div>
	)
}

export default App