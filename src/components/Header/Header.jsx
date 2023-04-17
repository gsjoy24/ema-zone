import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
	const { user, signOutUser } = useContext(AuthContext);

	const handleSignOut = () => {
		signOutUser()
			.then(() => {})
			.catch((err) => {
				console.log(err.message);
			});
	};

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

				{user === null ? (
					<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/login'>
						Login
					</NavLink>
				) : (
					''
				)}
				{user === null ? (
					<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/signup'>
						Sign Up
					</NavLink>
				) : (
					''
				)}
				{user !== null ? <span className='text-white'>{user.email}</span> : ''}
				{user !== null ? (
					<button className='sign-out-btn' onClick={handleSignOut}>
						Sign Out
					</button>
				) : (
					''
				)}
			</nav>
		</div>
	);
};

export default Header;
