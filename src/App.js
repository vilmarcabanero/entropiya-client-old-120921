import { NavLink, Switch, Route } from 'react-router-dom'
import './App.scss'
import ParticleBackground from './components/Particles/ParticleBackground'
import Header from './components/Home/Header'
import Home from './pages/Home'
import SignUp from './components/SignUp/SignUp'

const App = () => {
	return (
		<>
			{/* <div className='nav'>
				<NavLink exact to='/' activeClassName='active'>Home</NavLink>
				<NavLink exact to='/about' activeClassName='active'>About</NavLink>
			</div> */}
			<ParticleBackground/>
			<Header />
			<SignUp/>
			{/* <Home/> */}
			{/* <Header /> */}
			{/* <Switch>
				<Route exact path='/' component={SignIn} />
				<Route exact path='/home' component={Home} />

			</Switch> */}
		</>
	)
}

export default App
