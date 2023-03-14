import React, { useState, useEffect } from 'react'

const Helps = () => {
	// const [text, setText] = useState('')
	// const messages = [
	// 	'Hello, World!',
	// 	'Welcome to my website!',
	// 	'Have a nice day!',
	// ]
	// const [messageIndex, setMessageIndex] = useState(0)
	// const [isDeleting, setIsDeleting] = useState(false)

	// useEffect(() => {
	// 	let i = 0
	// 	let speed = isDeleting ? 50 : 150

	// 	const intervalId = setInterval(() => {
	// 		setText(prevText =>
	// 			isDeleting
	// 				? prevText.slice(0, -1)
	// 				: prevText + messages[messageIndex][i]
	// 		)

	// 		i = isDeleting ? i : i + 1
	// 		if (i === messages[messageIndex].length + 1) {
	// 			setIsDeleting(true)
	// 			i--
	// 			speed = 50
	// 		}
	// 		if (i === 0) {
	// 			setIsDeleting(false)
	// 			setMessageIndex(prevIndex => (prevIndex + 1) % messages.length)
	// 			speed = 100
	// 		}
	// 	}, speed)
	// 	return () => clearInterval(intervalId)
	// }, [messageIndex, isDeleting])

	return (
		<section>
			<div className='flex flex-col items-center justify-start w-full text-6xl text-center h-[450px] mt-28 font-bold'>
				<div>Mielofon поможет</div>
				<div className='text-black'>

				</div>
			</div>
		</section>
	)
}

export default Helps
