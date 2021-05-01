import { Redirect, Route } from 'react-router-dom'

const PrivateRouteHome = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				localStorage.getItem('authToken') ? (
					<Component {...props} />
				) : (
					<Redirect to='/s' />
				)
			}
		/>
	)
}

export default PrivateRouteHome
