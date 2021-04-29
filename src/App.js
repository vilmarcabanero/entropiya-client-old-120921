import { NavLink, Switch, Route } from 'react-router-dom'
import './App.scss'
import ParticleBackground from './components/Particles/ParticleBackground'
import Header from './components/Home/Header'
import Home from './pages/Home'
// import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn' 

const App = () => {
	return (
		<>
			{/* <div className='nav'>
				<NavLink exact to='/' activeClassName='active'>Home</NavLink>
				<NavLink exact to='/about' activeClassName='active'>About</NavLink>
			</div> */}
			<ParticleBackground />
			<Header />
			{/* <SignUp/> */}
			<SignIn/>
			{/* <Header /> */}
			{/* <Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/signin' component={SignIn} />
			</Switch> */}
		</>
	)
}

export default App
