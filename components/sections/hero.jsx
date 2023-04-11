//
// Hero section
//

import React from 'react'
import SocialLinks from '../social.links'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='flex flex-col gap-10 items-center justify-center bg_hero bg-cover bg-center h-screen w-full text-white'>
			<div className='text-center text-4xl md:text-5xl lg:text-6xl font-extrabold w-[65%] uppercase z-10'>
				AI-сервис который поможет вам легко и быстро создавать текстовый контент
			</div>

			<div className='flex flex-col gap-5 mt-6 md:flex-row md:mt-0 w-max h-max z-10'>
				<Link href='https://app.mielofon.online'>
					<div className='text-[18px] bg-white bg-opacity-70 text-zinc-800 py-4 px-6 rounded-full cursor-pointer hover:bg-opacity-80 transition-colors font-semibold shadow-xl w-[300px] text-center h-max'>
						Попробовать бесплатно
					</div>
				</Link>

				<div className='flex items-center justify-center gap-3 text-[18px] bg-blue-500 text-white bg-opacity-70 py-4 px-6 rounded-full cursor-pointer hover:bg-opacity-80 transition-colors font-semibold shadow-xl w-[300px] h-max'>
					<FaTelegramPlane />
					Telegram бот
				</div>
			</div>
		</section>
	)
}

export default Hero
