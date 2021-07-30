import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/index'
import reportWebVitals from './reportWebVitals'

import './i18n'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
)

reportWebVitals()
