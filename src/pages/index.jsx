import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import About from './about/index'
import Skills from './skills/index'
import Experiences from './experiences/index'
import Contact from './contact/index'

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={About} />
			<Route path='/skills' component={Skills} />
			<Route path='/experiences' component={Experiences} />
			<Route path='/contact' component={Contact} />
		</Switch>
	)
}

export default withRouter(Main)
