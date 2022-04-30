import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	//context
	const context = useContext(userContext);

	//router
	const router = useNavigate();

	const [emailOrUsername, setEmailOrUsername] = useState('');
	const [password, setPassword] = useState('');

	const submitForm = (event) => {
		event.preventDefault();
		// TODO: Create method 'setUser: (userObject) => {}' in userContext.
		// userContext.setUser({ name: {}, email: {}, daysSinceLastWorkout: {}, token: 'jwt_random_token' });
		// router('/admin/dashboard');
	};

	const handleChange = (event) => {
		switch (event.target.id) {
			case 'formEmailOrUsername':
				setEmailOrUsername(event.target.value);
				break;
			case 'formPassword':
				setPassword(event.target.value);
				break;
			default:
				break;
		}
	};

	return (
		<Form onSubmit={(e) => submitForm(e)}>
			{/* User email or username input */}
			<Form.Group className='mb-3' controlId='formEmailOrUsername'>
				<Form.Label>Unesite email ili korisničko ime:</Form.Label>
				<Form.Control
					value={emailOrUsername}
					onChange={(e) => handleChange(e)}
					required
					type='text'
					minLength={3}
					maxLength={25}
				/>
			</Form.Group>

			{/* User email input */}
			<Form.Group className='mb-3' controlId='formPassword'>
				<Form.Label>Unesite lozinku</Form.Label>
				<Form.Control
					value={password}
					onChange={(e) => handleChange(e)}
					required
					type='password'
					minLength={8}
					maxLength={100}
					placeholder=''
				/>
			</Form.Group>

			{/* Submit button */}
			<div className='d-flex justify-content-center align-items-center'>
				<Button variant='primary' type='submit'>
					Prijavi me!
				</Button>
			</div>
		</Form>
	);
};

export default Login;
