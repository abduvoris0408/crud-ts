import { useRoutes } from 'react-router-dom'

import Home from '../pages/home/home'
const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <Home />,
		},
	])
}

export default Router
