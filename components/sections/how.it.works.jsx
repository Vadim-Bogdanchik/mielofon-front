const HowItWorks = () => {
	return (
		<section>
			<div className='flex flex-col items-center justify-start w-full text-3xl lg:text-6xl text-center h-max mt-28 font-bold'>
				<div className='mb-10'>Как это работает</div>

				<div className='flex items-center justify-between'>
					<div className='w-1/2'>
						<img src='/images/step1.png' alt='step1' />
					</div>
					<div className='w-1/2'>в</div>
				</div>

				<div className='w-[400px]'>
					<img src='/images/dotted-line.svg' alt='connector' />
				</div>

				<div className='flex items-center justify-between'>
					<div className='w-1/2'>в</div>
					<div className='w-1/2'>
						<img src='/images/step2.png' alt='step2' />
					</div>
				</div>

				<div className='w-[400px]'>
					<img src='/images/dotted-line-revers.png' alt='connector' />
				</div>

				<div className='flex items-center justify-between'>
					<div className='w-1/2'>
						<img src='/images/step3.png' alt='step3' />
					</div>
					<div className='w-1/2'>в</div>
				</div>

				<div className='text-black'></div>
			</div>
		</section>
	)
}

export default HowItWorks
