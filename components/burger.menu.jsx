import { useState } from 'react'
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai'


const BurgerMenu = () => {
	const [menuState, setMenuState] = useState(false)

	const handleMenuClick = () => {
		setMenuState(!menuState)
	}

	return (
		<div>
			<div
				onClick={handleMenuClick}
				className='w-max h-max text-4xl block xl:hidden cursor-pointer text-white'
			>
				<AiOutlineMenu />
			</div>
			<div
				className={` slide-out-menu ${
					menuState ? 'active' : ''
				} text-white`}
			>
				<div
					onClick={handleMenuClick}
					className='absolute top-5 left-5 cursor-pointer text-4xl bg-white bg-opacity-50 rounded-full p-2 '
				>
					<AiOutlineArrowLeft />
				</div>
				<div className='flex items-center justify-center h-screen'>
					<ul className='text-3xl text-center'>
						<li className='py-3 px px-10'>
							<a href='#'>Главная</a>
						</li>
						<li className='py-3 px px-10'>
							<a href='#'>API</a>
						</li>
						<li className='py-3 px px-10'>
							<a href='#'>Кейсы</a>
						</li>
						<li className='py-3 px px-10'>
							<a href='#'>Блог</a>
						</li>
						<li className='py-3 px px-10'>
							<a href='#'>Цены</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
