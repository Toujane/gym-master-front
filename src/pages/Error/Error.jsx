import React from 'react';
import { Alert } from 'react-bootstrap';
import { ErrorInner, ErrorMessage, ErrorWrapper } from './ErrorStyle';

const Error = ({ message }) => {
	return (
		<ErrorWrapper>
			<Alert variant='danger'>
				<Alert.Heading>Ups!</Alert.Heading>
				<ErrorInner>{message}</ErrorInner>
				<br />
				<Alert.Link href='/'>Vrati se na početnu stranicu.</Alert.Link>
			</Alert>
		</ErrorWrapper>
	);
};

export default Error;
