import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Icons
import { FaVk, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
	return (
		<section className='flex items-center justify-center mb-3'>
			{/* Desktop */}
			<div className='hidden lg:block'>
				<div className='flex flex-col justify-between p-12  w-max h-max bg-footer-bg bg-opacity-10 rounded-3xl'>
					<div className='flex items-start justify-between'>
						<div className='flex flex-col gap-1 font-semibold'>
							<div className='mb-6 text-gray-500 text-[14px]'>О продукте</div>
							<Link href='#'>
								<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
									Mielofon API
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Цены
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Примеры
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Инструменты
								</div>
							</Link>
						</div>

						<div className='flex flex-col gap-1  font-semibold'>
							<div className='mb-6 text-gray-500 text-[14px]'>Компания</div>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Блог
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Школа
								</div>
							</Link>
						</div>

						<div className='flex flex-col gap-1 font-semibold'>
							<div className='mb-6 text-gray-500 text-[14px]'>Поддержка</div>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Демо
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Контакты
								</div>
							</Link>
						</div>

						<div className='flex flex-col gap-1 font-semibold'>
							<div className='mb-6 text-gray-500 text-[14px]'>Кейсы</div>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Команды
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Блогеры
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									SMM
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
									Email Marketing
								</div>
							</Link>
						</div>
					</div>

					<div className='flex items-center gap-32 justify-between mt-10'>
						<div className='flex gap-4 items-center'>
							<div className='flex gap-2 items-center'>
								<Image
									// loader={myLoader}
									src='/images/mlogo2.png'
									alt='Picture of the author'
									width={40}
									height={40}
								/>

								<p className='font-museomoderno text-xl'>Mielofon</p>
							</div>
							<div className='flex gap-2 items-center text-[12px]'>
								<div>© 2023 Mielofon.online</div>
								<Link href='#'>
									<div className='cursor-pointer text-footer-links font-semibold'>
										Политика конфиденциальности
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-footer-links font-semibold'>
										Пользовательское соглашение
									</div>
								</Link>
							</div>
						</div>
						<div className='flex gap-3 text-white'>
							<div className='bg-gradient-to-tr from-footer-g1 via-footer-g2 to-footer-g3 p-2 rounded-xl cursor-pointer '>
								<Link href='#'>
									<FaTelegramPlane />
								</Link>
							</div>
							<div className=' bg-gradient-to-tr from-footer-g1 via-footer-g2 to-footer-g3 p-2 rounded-xl cursor-pointer'>
								<Link href='#'>
									<FaVk />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<div className='block lg:hidden w-full mx-2'>
				<div className='flex flex-col justify-between p-12 w-full h-max bg-footer-bg bg-opacity-10 rounded-3xl'>
					<table>
						<tbody>
							<tr>
								<td colSpan={2}>
									<div className='flex flex-col gap-1 font-semibold'>
										<div className='mb-6 text-gray-500 text-[14px]'>
											О продукте
										</div>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Mielofon API
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Цены
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Примеры
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Инструменты
											</div>
										</Link>
									</div>
								</td>
								<td colSpan={2}>
									<div className='flex flex-col gap-1 font-semibold'>
										<div className='mb-6 text-gray-500 text-[14px]'>Кейсы</div>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Команды
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Блогеры
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												SMM
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Email Marketing
											</div>
										</Link>
									</div>
								</td>
							</tr>
							<tr className='h-[50px]'>
								<td colSpan={2}> </td>
								<td colSpan={2}> </td>
							</tr>
							<tr>
								<td colSpan={2}>
									<div className='flex flex-col gap-1  font-semibold'>
										<div className='mb-6 text-gray-500 text-[14px]'>
											Компания
										</div>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Блог
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Школа
											</div>
										</Link>
									</div>
								</td>
								<td colSpan={2}>
									<div className='flex flex-col gap-1 font-semibold'>
										<div className='mb-6 text-gray-500 text-[14px]'>
											Поддержка
										</div>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Демо
											</div>
										</Link>
										<Link href='#'>
											<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
												Контакты
											</div>
										</Link>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					{/* ************************** */}
					{/* <div className='flex items-start justify-between'>
						<div className='w-1/2'>
							<div className='flex flex-col gap-1 font-semibold'>
								<div className='mb-6 text-gray-500 text-[14px]'>О продукте</div>
								<Link href='#'>
									<div className='cursor-pointer text-[16px] text-zinc-800 hover:text-footer-links'>
										Mielofon API
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Цены
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Примеры
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Инструменты
									</div>
								</Link>
							</div>

							<div className='flex flex-col gap-1 font-semibold'>
								<div className='mb-6 text-gray-500 text-[14px]'>Кейсы</div>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Команды
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Блогеры
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										SMM
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Email Marketing
									</div>
								</Link>
							</div>
						</div>
						<div className='w-1/2'>
							<div className='flex flex-col gap-1  font-semibold'>
								<div className='mb-6 text-gray-500 text-[14px]'>Компания</div>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Блог
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Школа
									</div>
								</Link>
							</div>

							<div className='flex flex-col gap-1 font-semibold'>
								<div className='mb-6 text-gray-500 text-[14px]'>Поддержка</div>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Демо
									</div>
								</Link>
								<Link href='#'>
									<div className='cursor-pointer text-[18px] text-zinc-800 hover:text-footer-links'>
										Контакты
									</div>
								</Link>
							</div>
						</div>
					</div> */}

					<div className='flex flex-col items-center justify-center mt-10'>
						<div className='flex gap-2 items-center'>
							<Image
								src='/images/mlogo2.png'
								alt='Picture of the author'
								width={40}
								height={40}
							/>
							<p className='font-museomoderno text-xl'>Mielofon</p>
						</div>
						<div>© 2023 Mielofon.online</div>

						<div className='flex flex-col gap-2 items-center justify-center text-[12px] mt-2'>
							<Link href='#'>
								<div className='cursor-pointer text-footer-links font-semibold'>
									Политика конфиденциальности
								</div>
							</Link>
							<Link href='#'>
								<div className='cursor-pointer text-footer-links font-semibold'>
									Пользовательское соглашение
								</div>
							</Link>
						</div>

						<div className='flex gap-5 text-white mt-10'>
							<div className='bg-gradient-to-tr from-footer-g1 via-footer-g2 to-footer-g3 p-2 rounded-xl cursor-pointer '>
								<Link href='#'>
									<FaTelegramPlane />
								</Link>
							</div>
							<div className=' bg-gradient-to-tr from-footer-g1 via-footer-g2 to-footer-g3 p-2 rounded-xl cursor-pointer'>
								<Link href='#'>
									<FaVk />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
