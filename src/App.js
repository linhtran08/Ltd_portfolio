import React from 'react';
import {About, Footer, Header, Skills, Testimonial, Work} from "./container";
import {Navbar} from "./components";
import './App.scss'

const App = (props) => {
	return (
		<div className="app">
			<Navbar/>
			<Header/>
			<About/>
			<Work/>
			<Footer />
		</div>
	)
};

export default App;