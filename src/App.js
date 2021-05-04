import {  Switch, Route, useLocation } from 'react-router-dom'
import './App.scss'
import { AnimatePresence } from 'framer-motion'

import NightModeBackground from './components/NightModeBackground'
import Header from './components/Home/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Authentication/LoginPage'
import RegisterPage from './pages/Authentication/RegisterPage'
import QuizPage from './pages/Quiz/QuizPage'
import LoadingPage from './pages/LoadingPage'

//Routing
import PrivateRoute from './routing/PrivateRoute'
import PrivateRouteHome from './routing/PrivateRouteHome'

//private pages
import ProfilePage from './pages/ProfilePage'



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
					<Route exact path='/login' component={LoginPage} />
					
					<Route exact path='/loading' component={LoadingPage} />

					<PrivateRoute exact path='/quiz' component={QuizPage} />
					<PrivateRouteHome exact path='/' component={ProfilePage} />
				</Switch>

			</AnimatePresence>
		</>
	)
}

export default App
