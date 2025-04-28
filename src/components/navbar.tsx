// src/components/Navbar.jsx - Navigation component
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='bg-gray-800 fixed w-full z-10'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					<Link to='/' className='flex items-center'>
						<svg
							className='h-8 w-8 text-blue-500 mr-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
							/>
						</svg>
						<span className='font-bold text-white text-xl'>
							News Portal
						</span>
					</Link>

					<div className='flex items-center'>
						<Link
							to='/'
							className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
						>
							Home
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
