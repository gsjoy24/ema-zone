import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Provider/AuthProvider';

const Login = () => {
	const { signInUser } = useContext(AuthContext);
	const [err, setErr] = useState('');
	const navigate = useNavigate();
	const [showPass, setShowPass] = useState(false);

	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';

	const handleLogin = (event) => {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		setErr('');
		signInUser(email, password)
			.then((result) => {
				event.target.reset();
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err.message);
				setErr(err.message);
			});
	};

	return (
		<div>
			<h2 className='title'>Login</h2>
			<form onSubmit={handleLogin} className='form-control'>
				<label htmlFor='email'>Email</label>
				<br />
				<input type='email' name='email' placeholder='email' required /> <br />
				<br />
				<label htmlFor='password'>Password</label>
				<br />
				<input type={showPass ? 'text' : 'password'} name='password' placeholder='password' required />
				<p onClick={() => setShowPass(!showPass)}>
					{showPass ? (
						<span>
							<small>Hide Password</small>
						</span>
					) : (
						<span>
							<small>Show Password</small>
						</span>
					)}
				</p>
				<input type='submit' value='Submit' />
				<p>
					<small>
						New here? <Link to='/signup'>Sign Up </Link>Now
					</small>
				</p>
				<p className='err-text'>{err}</p>
			</form>
		</div>
	);
};

export default Login;
