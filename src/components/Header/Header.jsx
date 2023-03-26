import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';

const Header = () => {
	return (
		<div className='header'>
			{/* logo */}
			<div className='logo'>
				<img src={logo} alt='ema-zone' />
			</div>

			{/* navigation */}
			<nav>
				<a href='/order'>Order</a>
				<a href='/review'>Order Review</a>
				<a href='/inventory'>Manage Inventory</a>
				<a href='/login'>Login</a>
			</nav>
		</div>
	);
};

export default Header;
