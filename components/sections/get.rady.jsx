import Link from "next/link"

const GetRady = () => {
	return (
		<scetion>
			<div className='flex flex-col items-center justify-start w-full text-3xl lg:text-6xl text-center h-[350px] my-28 font-bold'>
				<div>Готовы ?</div>
				<div className='text-black text-xl font-normal w-full lg:w-[40%] mt-5 p-2 sm:p-0'>
					Напишите текстовый контент в 10 раз быстрее, удерживайте внимание
					аудитории и никогда не испытывайте трудности с пустой страницей.
				</div>
				<Link href='https://app.mielofon.online/'>
					<div className='text-[18px] bg-btn-bg bg-opacity-70 text-zinc-800 py-4 px-6 rounded-full cursor-pointer hover:bg-opacity-80 transition-colors font-semibold mt-7 sm:mt-10 mb-2 shadow-xl w-[300px] text-center h-max'>
						Попробовать бесплатно
					</div>
				</Link>
			</div>
		</scetion>
	)
}

export default GetRady
