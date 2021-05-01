import { NavLink, Switch, Route, useLocation } from 'react-router-dom'
import './App.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AnimatePresence } from 'framer-motion'

import ParticleBackground from './components/Particles/ParticleBackground'
import NightModeBackground from './components/NightModeBackground'
import Header from './components/Home/Header'
import EntropiyaLogo from './components/Home/EntropiyaLogo'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/Authentication/RegisterPage'
import LoginPage from './pages/Authentication/LoginPage'
import ForgotPasswordPage from './pages/Authentication/ForgotPasswordPage'
import ResetPasswordPage from './pages/Authentication/ResetPasswordPage'
import QuizPage from './pages/Quiz/QuizPage'
import LoadingPage from './pages/LoadingPage'

const App = () => {
	const location = useLocation()
	return (
		<>
			{/* <div className='nav'>
				<NavLink exact to='/' activeClassName='active'>Home</NavLink>
				<NavLink exact to='/about' activeClassName='active'>About</NavLink>
			</div> */}
			{/* <ParticleBackground /> */}
			<NightModeBackground />
			<Header />
			{/* <div className='header'>
					<EntropiyaLogo />
				</div> */}
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/forgotpassword' component={ForgotPasswordPage} />
					<Route exact path='/resetpassword' component={ResetPasswordPage} />
					<Route exact path='/quiz' component={QuizPage} />
					<Route exact path='/loading' component={LoadingPage} />
				</Switch>
			</AnimatePresence>
		</>
	)
}

export default App
