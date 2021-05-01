import SignIn from '../../components/Authentication/SignIn'
import EntropiyaLogo from '../../components/Home/EntropiyaLogo'
import { motion } from 'framer-motion'
import Mathjax from '../../components/Quiz/Mathjax'

const App = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{duration: 0.25}}
		>
			<div>

				<SignIn />
				<br></br><br></br>
			</div>
		</motion.div>
	)
}

export default App
