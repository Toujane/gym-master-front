import React from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ErrorInner, ErrorWrapper } from './ErrorStyle';

const Error = ({ message }) => {
	const navigate = useNavigate();
	return (
		<ErrorWrapper>
			<Alert variant='danger'>
				<Alert.Heading>Ups!</Alert.Heading>
				<ErrorInner>{message}</ErrorInner>
				<br />
				<Alert.Link onClick={() => navigate('/')}>Vrati se na početnu stranicu.</Alert.Link>
			</Alert>
		</ErrorWrapper>
	);
};

export default Error;
