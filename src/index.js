import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
	<HashRouter>
		<Route path='/' component={App} />
	</HashRouter>,
	document.getElementById('root')
)
