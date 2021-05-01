import SignUp from '../../components/Authentication/Register'
import EntropiyaLogo from '../../components/Home/EntropiyaLogo'
import { motion } from 'framer-motion'
import Background from '../../components/Particles/Background'

const SignUpPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			<div>

			<Background/>
				<SignUp />
			</div>
		</motion.div>
	)
}

export default SignUpPage
