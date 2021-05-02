import Login2 from '../../components/Authentication/Login2'
import EntropiyaLogo from '../../components/Home/EntropiyaLogo'
import { motion } from 'framer-motion'
import Background from '../../components/Particles/Background'

const LoginPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{duration: 0.25}}
		>
			<div>
			<Background/>
				<Login2 />
				<br></br><br></br>
			</div>
		</motion.div>
	)
}

export default LoginPage
