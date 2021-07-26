import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
	const history = useHistory()

	useEffect(() => history.push('/'))

	return <></>
}

export default NotFound
