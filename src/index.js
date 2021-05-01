import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter as Router, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
	<Router>
		<Route path='/' component={App} />
	</Router>,
	document.getElementById('root')
)
