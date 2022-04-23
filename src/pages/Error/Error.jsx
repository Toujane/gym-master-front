import React from 'react';
import { ErrorMessage } from './ErrorStyle';

const Error = ({ message }) => {
	return <ErrorMessage>{message}</ErrorMessage>;
};

export default Error;
