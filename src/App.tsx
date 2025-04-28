import Navbar from './components/navbar'
import Router from './router/router'
const App = () => {
	return (
		<div className='bg-bgprimary bg-hero dark:bg-white'>
			<Navbar />
			<Router />
		</div>
	)
}

export default App
