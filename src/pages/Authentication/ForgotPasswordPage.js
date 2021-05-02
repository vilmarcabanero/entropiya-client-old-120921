import SignIn from '../../components/Authentication/Login'
import EntropiyaLogo from '../../components/Home/EntropiyaLogo'
import { motion } from 'framer-motion'
import Background from '../../components/Particles/Background'

const ForgotPasswordPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{duration: 0.25}}
		>
			<div>
			<Background/>
				<SignIn />
				<br></br><br></br>
			</div>
		</motion.div>
	)
}

export default ForgotPasswordPage