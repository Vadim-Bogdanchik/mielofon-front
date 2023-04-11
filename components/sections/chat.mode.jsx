import React from 'react'

const ChatMode = () => {
	return (
		<scetion>
			<div className='flex flex-col items-center justify-start w-full text-3xl lg:text-6xl text-center h-max mt-28 font-bold'>
				<div className='flex items-start justify-between'>
					<div className='w-1/2'>
						<img src='/images/step1.png' alt='step1' />
					</div>
					<div className='w-1/2  text-right'>
						<div className='mb-10'>Чат</div>
					</div>
				</div>
			</div>
		</scetion>
	)
}

export default ChatMode
