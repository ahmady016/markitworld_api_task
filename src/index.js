import React from 'react'
import { render } from 'react-dom'

import App from './App'
import './index.css'

import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

render(
	<React.StrictMode>
		<Router history={history}>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
