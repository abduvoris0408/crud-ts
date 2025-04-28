import CrudComponent from '../../components/CrudComponent'
import Navbar from '../../components/navbar'

const Home = () => {
	return (
		<div className='min-h-screen bg-gray-100'>
			<Navbar />

			<div className='pt-20 '>
				<CrudComponent title='Yangiliklar boshqaruvi' />
			</div>

			<footer className='bg-gray-800 fixed w-full bottom-0 text-white text-center py-4'>
				<p>&copy; {new Date().getFullYear()} News Management System</p>
			</footer>
		</div>
	)
}

export default Home
