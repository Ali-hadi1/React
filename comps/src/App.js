import { Children, useState } from 'react';
import './css/index.css';

const message = [
	"Learn React*",
	"Apply For Jobs",
	"Invest your new income"
]

export default function App() {
	return (
		<div>
			<Steps/>
		</div>
	)
}

function Steps() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true)

	function handlePrevious() {
		if (step > 1) setStep(step - 1)
	}

	function handleNext() {
		if(step < 3) setStep(step + 1)
	}

	return (
		<div>
			<div className='flex flex-col w-4/12 m-auto mt-16'>
				<button className='self-end' onClick={() => setIsOpen(!isOpen)}>&times;</button>
			</div>
			{
				isOpen &&
				(<div className='flex flex-col w-4/12 m-auto rounded-md px-16 py-3 bg-slate-100'>
					<div className='flex justify-between'>
						<div className={`flex justify-center items-center w-6 h-6 rounded-full ${step >= 1 ? ' bg-indigo-600 text-white' : 'bg-slate-300'}`}>1</div>
						<div className={`flex justify-center items-center w-6 h-6 rounded-full ${step >= 2 ? ' bg-indigo-600 text-white' : 'bg-slate-300'}`}>2</div>
						<div className={`flex justify-center items-center w-6 h-6 rounded-full ${step >= 3 ? ' bg-indigo-600 text-white' : 'bg-slate-300'}`}>3</div>
					</div>
					<div className='py-8 self-center'>
						<p className='font-medium'>Step {step}: {message[step -1]}</p>
					</div>
					<div className='flex justify-between'>
						<Button textColor='#fff' bgColor='#7950f2' onClick={handlePrevious}><span>↩</span> Previous</Button>
						<Button textColor='#fff' bgColor='#7950f2' onClick={handleNext}>Next <span>↪</span></Button>
					</div>
				</div>)
			}
		</div>
	);
}

function Button({textColor, bgColor, onClick, children}) {
	return (
		<button
			className='px-2 py-0.5 rounded-2xl bg-indigo-600 text-white'
			style={{backgroundColor: bgColor, color: textColor}} 
			onClick={onClick}
		>
			{children}
		</button>
	)
}
