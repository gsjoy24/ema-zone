import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			{/* logo */}
			<div className='logo'>
				<img src={logo} alt='ema-zone' />
			</div>

			{/* navigation */}
			<nav>
				<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
					Shop
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/order'>
					Order Review
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/inventory'>
					Inventory
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/login'>
					Login
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
