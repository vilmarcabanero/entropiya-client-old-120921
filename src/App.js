import { NavLink, Switch, Route, useLocation } from 'react-router-dom'
import './App.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AnimatePresence } from 'framer-motion'

import ParticleBackground from './components/Particles/ParticleBackground'
import NightModeBackground from './components/NightModeBackground'
import Header from './components/Home/Header'
import EntropiyaLogo from './components/Home/EntropiyaLogo'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/Authentication/SignUpPage'
import SignInPage from './pages/Authentication/SignInPage'
import QuizPage from './pages/Quiz/QuizPage'

const App = () => {
	const location = useLocation()
	return (
		<>
			{/* <div className='nav'>
				<NavLink exact to='/' activeClassName='active'>Home</NavLink>
				<NavLink exact to='/about' activeClassName='active'>About</NavLink>
			</div> */}
			{/* <ParticleBackground /> */}
			<NightModeBackground/>
			<Header/>
			{/* <div className='header'>
					<EntropiyaLogo />
				</div> */}
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/signup' component={SignUpPage} />
					<Route exact path='/signin' component={SignInPage} />
					<Route exact path='/quiz' component={QuizPage} />
				</Switch>
			</AnimatePresence>
		</>
	)
}

export default App
