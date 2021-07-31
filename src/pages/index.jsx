import React, { useEffect } from 'react'
import { withTranslation, useTranslation } from 'react-i18next'
import { Route, Switch, withRouter } from 'react-router-dom'

import About from './about/index'
import Works from './works/index'
import WorkInDetails from './works/work-details/index'
import Experiences from './experiences/index'
import Contact from './contact/index'
import NotFound from './404/index'

const Main = () => {
	const { i18n } = useTranslation()

	useEffect(() => {
		if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
		else i18n.changeLanguage(localStorage.getItem('lang'))
		// eslint-disable-next-line
	}, [])

	return (
		<Switch>
			<Route exact path='/' component={About} />
			<Route path='/works/:workName' component={WorkInDetails} />
			<Route path='/works' component={Works} />
			<Route path='/experiences' component={Experiences} />
			<Route path='/contact' component={Contact} />
			<Route component={NotFound} />
		</Switch>
	)
}

export default withRouter(withTranslation()(Main))
