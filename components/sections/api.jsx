import Image from 'next/image'
import React from 'react'

const Api = () => {
	return (
		<scetion>
			<div className='flex flex-col items-center justify-start w-full text-3xl lg:text-6xl text-center h-max mt-28 font-bold'>
				<div className='w-full text-center'>
					<div className='mb-10'>API</div>
				</div>
				<div className='text-xl font-normal px-2'>
					Автоматизируйте процессы и повысьте эффективность вашего бизнеса с
					помощью нашего API
				</div>
				<div className='my-10 px-7 sm:px-0'>
					<Image src='/images/api.png' width={400} height={400} alt='API'/>
				</div>
			</div>
		</scetion>
	)
}

export default Api
