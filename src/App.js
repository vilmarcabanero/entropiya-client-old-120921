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
// import LoginPage from './pages/Authentication/LoginPage'
import ForgotPasswordPage from './pages/Authentication/ForgotPasswordPage'
import ResetPasswordPage from './pages/Authentication/ResetPasswordPage'
import QuizPage from './pages/Quiz/QuizPage'
import LoadingPage from './pages/LoadingPage'

//Routing
import PrivateRoute from './routing/PrivateRoute'
import PrivateRouteHome from './routing/PrivateRouteHome'

//private pages
import ProfilePage from './pages/ProfilePage'

import LoginPage2 from './components/Authentication/LoginScreen'

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
					<Route exact path='/s' component={HomePage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/login' component={LoginPage2} />
					<Route exact path='/forgotpassword' component={ForgotPasswordPage} />
					<Route
						exact
						path='/resetpassword/:resetToken'
						component={ResetPasswordPage}
					/>
					
					<Route exact path='/loading' component={LoadingPage} />
				</Switch>

				{/* Private Routes */}
				<Switch location={location} key={location.pathname}>
					<PrivateRoute exact path='/quiz' component={QuizPage} />
					<PrivateRouteHome exact path='/' component={ProfilePage} />
				</Switch>
			</AnimatePresence>
		</>
	)
}

export default App
