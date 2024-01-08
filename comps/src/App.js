import './css/index.css';

const message = [
	"Learn React*",
	"Apply For Jobs",
	"Invest your new income"
]

function App() {
	const step = 1;

	return (
		<div className='flex flex-col w-4/12 m-auto mt-16 rounded-md px-16 py-3 bg-slate-100'>
			<div className='flex justify-between'>
				<div className={`flex justify-center items-center w-6 h-6 rounded-full ${step >= 1 ? ' bg-indigo-600 text-white' : 'bg-slate-300'}`}>1</div>
				<div className={`flex justify-center items-center w-6 h-6 rounded-full ${step >= 2 ? ' bg-indigo-600 text-white' : 'bg-slate-300'}`}>2</div>
				<div className={`flex justify-center items-center w-6 h-6 rounded-full ${step >= 3 ? ' bg-indigo-600 text-white' : 'bg-slate-300'}`}>3</div>
			</div>
			<div className='py-8 self-center'>
				<p className='font-medium'>Step {step}: {message[step -1]}</p>
			</div>
			<div className='flex justify-between'>
				<button className='px-2 py-0.5 rounded-2xl bg-indigo-600 text-white'>Previous</button>
				<button className='px-2 py-0.5 rounded-2xl bg-indigo-600 text-white'>Next</button>
			</div>
		</div>
	);
}

export default App;
