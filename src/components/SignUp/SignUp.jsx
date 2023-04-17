import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [err, setErr] = useState('');

	const handleRegister = (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const confirm = event.target.confirm.value;
		console.log(name, email, password, confirm);

		// password validation
		if (password !== confirm) {
			setErr('your password did not match!');
			return;
		} else if (password.length !== 8) {
			setErr('The password must be at least 8 characters');
			return;
		}
		setErr('');
		// creating new user.
		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				event.target.reset();
			})
			.catch((err) => {
				setErr(err.message);
			});
	};

	return (
		<div>
			<h2 className='title'>Register</h2>
			<form onSubmit={handleRegister} className='form-control'>
				<label htmlFor='name'>Name</label>
				<br />
				<input type='text' name='name' placeholder='name' required /> <br />
				<br />
				<label htmlFor='email'>Email</label>
				<br />
				<input type='email' name='email' placeholder='email' required /> <br />
				<br />
				<label htmlFor='password'>Password</label>
				<br />
				<input type='password' name='password' placeholder='password' required /> <br />
				<br />
				<label htmlFor='password'>Confirm</label>
				<br />
				<input type='password' name='confirm' placeholder='password' required /> <br />
				<br />
				<input type='submit' value='Submit' />
				<p>
					<small>
						Already have an account? <Link to='/login'>Login </Link>Now
					</small>
				</p>
				<p className='err-text'>{err}</p>
			</form>
		</div>
	);
};

export default Register;
