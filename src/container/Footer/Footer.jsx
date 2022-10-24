import React, {useState} from 'react';
import {motion} from "framer-motion";

import {images} from '../../constants'
import {AppWrap, MotionWrap} from "../../wrapper";
import {client,urlFor} from "../../client";
import './Footer.scss'

const Footer = (props) => {
	const [formData, setFormData] = useState({name: '', email: '', message: ''})
	const [isFormSubmited, setIsFormSubmited] = useState(false)
	const [loading, setLoading] = useState(false)

	const {name, email, message} = formData

	const handleSubmit = () => {
		setLoading(true)

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		}

		client.create(contact)
			.then(()=>{
				setLoading(false)
				setIsFormSubmited(true)
			})
	}

	const handleInput = (e) =>{
		const {name, value} = e.target
		setFormData({...formData,[name]: value})
	}

	return (
		<>
			<h2 className={'head-text'}>Ready to <span>support</span> & chat with <span>me</span></h2>
			<div className={'app__footer-cards'}>
				<div className={'app__footer-card'}>
					<img src={images.email} alt="Email"/>
					<a href="mailto:tvlinhdev@gmail.com" className={'p-text'}>tvlinhdev@gmail.com</a>
				</div>
				<div className={'app__footer-card'}>
					<img src={images.mobile} alt="mobile"/>
					<a href="tel:+84 921871142" className={'p-text'}>+84 921871142</a>
				</div>
			</div>

			{!isFormSubmited ? (
			<div className={'app__footer-form app__flex'}>
				<div className={'app__flex'}>
					<input className={'p-text'} type="text" placeholder={'Your Name'} name={'name'} value={name} onChange={handleInput}/>
				</div>
				<div className={'app__flex'}>
					<input className={'p-text'} type="email" placeholder={'Your Email'} name={'email'} value={email} onChange={handleInput}/>
				</div>
				<div>
					<textarea className={'p-text'} placeholder={'Your Message'} value={message} name={'message'} onChange={handleInput} />
				</div>
				<button type={'button'} className={'p-text'} onClick={handleSubmit}  >{loading ? 'Sending' : 'Send Message'}</button>
			</div>
			) : (
				<div>
					<h3 className={'head-text'}>Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	)
};

export default AppWrap(MotionWrap(Footer, 'app__footer'),'contact', 'app__whitebg');