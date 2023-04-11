//
// Main page
//

'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Hero from '../components/sections/hero'
import Helps from '../components/sections/helps'
import HowItWorks from '../components/sections/how.it.works'
import GetRedy from '../components/sections/get.rady'
import Api from '../components/sections/api'
import ChatMode from '../components/sections/chat.mode'

// Styles global
import './globals.css'

export default function Home() {
	const { pathname } = useRouter()

	// Прокрутка в начало сайта при обновлении страницы
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<main className='font-montserrat'>
			<Hero />
			{/* <ChatMode /> */}
			<Api />
			{/* <HowItWorks /> */}
			<Helps />
			<GetRedy />
		</main>
	)
}
