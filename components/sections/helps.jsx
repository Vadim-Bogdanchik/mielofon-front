import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'


import { ImPriceTag } from 'react-icons/im'
import { BsMegaphoneFill } from 'react-icons/bs'
import { RiPriceTag3Line } from 'react-icons/ri'
import { FaMicroblog } from 'react-icons/fa'


const Helps = () => {
	let texts = [
		'маркетплейсам',
		'владельцам бизнеса',
		'маркетологам',
		'рекламным агенствам',
		'smm спецалистам',
		'стартапам',
	]

	const [currentText, setCurrentText] = useState('')
	const [visible, setVisible] = useState(false)
	const [currentIdx, setCurrentIdx] = useState(0)
	const { ref, inView } = useInView({ threshold: 0.5 })

	useEffect(() => {
		// Очистка всех предыдущих таймеров при изменении видимости элемента
		let timers = []

		if (inView) {
			setVisible(true)

			const currentTextArr = texts[currentIdx].split('')
			setCurrentText('')

			currentTextArr.forEach((char, idx) => {
				const timer = setTimeout(() => {
					setCurrentText(prev => prev + char)
				}, 100 * idx)
				// Добавление нового таймера в массив timers
				timers.push(timer)
			})
		} else {
			setVisible(false)
		}

		// Очистка всех таймеров в массиве timers при размонтировании или изменении inView или currentIdx
		return () => timers.forEach(timer => clearTimeout(timer))
	}, [inView, currentIdx])

	useEffect(() => {
		if (currentText === texts[currentIdx]) {
			const timer = setTimeout(() => {
				setCurrentIdx(prev => (prev + 1) % texts.length)
			}, 2000)

			return () => clearTimeout(timer)
		}
	}, [currentText, currentIdx, texts.length])

	return (
		<section>
			<div className='flex flex-col items-center justify-start w-full text-[35px] md:text-4xl lg:text-6xl text-center h-max mt-28 '>
				<div className='flex flex-col items-center bg_help bg-opacity-50 bg-cover bg-center py-14 font-bold w-[96%] rounded-3xl'>
					<div>Mielofon поможет</div>

					<div className='text-black text-3xl lg:text-6xl font-extrabold bg-gradient-to-tr text-transparent bg-clip-text animate-gradient-help'>
						<p ref={ref} style={{ opacity: visible ? 1 : 0 }}>
							{currentText}
						</p>
					</div>

					<div className='text-xl mt-10 font-normal w-full lg:w-[40%] px-7 lg:px-0'>
						Увеличивайте свою эффективность в написании текстов и добивайтесь
						лучших результатов за меньшее время с помощью нашего инструмента,
						разработанного на основе нейронных сетей.
					</div>

					<div className='flex flex-col md:flex-row items-center justify-center gap-10 w-full mt-10 px-7'>
						<div className='w-[350px] h-[200px] border-2 border-footer-bg bg-white cursor-pointer text-xl  rounded-3xl p-3 border-opacity-30 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'>
							<div className='flex justify-between items-start'>
								<div className='font-normal w-1/3'>
									<div className='border border-footer-links border-opacity-20 rounded-full p-5 w-max m-3'>
										<BsMegaphoneFill className='text-[20px] text-footer-links' />
									</div>
								</div>
								<div className='flex flex-col items-start w-2/3 mt-3'>
									<div className='font-semibold mb-2'>Рекламные текст</div>
									<div className='font-normal text-[14px] text-left'>
										Создавайте привлекательный рекламный текст за несколько
										кликов
									</div>
								</div>
							</div>
						</div>
						<div className='w-[350px] h-[200px] border-2 border-footer-bg bg-white cursor-pointer text-xl font-normal rounded-3xl p-3 border-opacity-30 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'>
							<div className='flex justify-between items-start'>
								<div className='font-normal w-1/3'>
									<div className='border border-footer-links border-opacity-20 rounded-full p-5 w-max m-3'>
										<ImPriceTag className='text-[20px] text-footer-links' />
									</div>
								</div>
								<div className='flex flex-col items-start w-2/3 mt-3'>
									<div className='font-semibold mb-2'>Описание товаров</div>
									<div className='font-normal text-[14px] text-left'>
									Автоматизируйте написание описания товаров и услуг
									</div>
								</div>
							</div>
						</div>
						<div className='w-[350px] h-[200px] border-2 border-footer-bg bg-white cursor-pointer text-xl font-normal rounded-3xl p-3 border-opacity-30 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'>
							<div className='flex justify-between items-start'>
								<div className='font-normal w-1/3'>
									<div className='border border-footer-links border-opacity-20 rounded-full p-5 w-max m-3'>
										<FaMicroblog className='text-[20px] text-footer-links' />
									</div>
								</div>
								<div className='flex flex-col items-start w-2/3 mt-3'>
									<div className='font-semibold mb-2'>Тексты для блогов</div>
									<div className='font-normal text-[14px] text-left'>
										Создавайте заголовки, текст, сценарии для вашего блога с поисковой оптимизицией.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Helps
