import { NavLink, Switch, Route, useLocation } from 'react-router-dom'
import './App.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AnimatePresence } from 'framer-motion'

import ParticleBackground from './components/Particles/ParticleBackground'
import Header from './components/Home/Header'
import EntropiyaLogo from './components/Home/EntropiyaLogo'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

const App = () => {
	const location = useLocation()
	return (
		<>
			{/* <div className='nav'>
				<NavLink exact to='/' activeClassName='active'>Home</NavLink>
				<NavLink exact to='/about' activeClassName='active'>About</NavLink>
			</div> */}
			<ParticleBackground />
			<Header/>
			{/* <div className='header'>
					<EntropiyaLogo />
				</div> */}
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={Home} />
					<Route exact path='/signup' component={SignUp} />
					<Route exact path='/signin' component={SignIn} />
				</Switch>
			</AnimatePresence>
		</>
	)
}

export default App
