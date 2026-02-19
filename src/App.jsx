import React from 'react';
import NavBar from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';


// Neo-Brutalism: bold background, blocky layout, strong shadow, high contrast
function App() {
	return (
		<div className="min-h-screen bg-yellow-200 font-sans text-gray-900 flex flex-col items-center border-8 border-black">
			<NavBar />
			<div className="w-full max-w-5xl px-4 mt-8">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
