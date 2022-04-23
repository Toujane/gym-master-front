import { createContext } from 'react';

export const UserContext = createContext({
	jwt: '',
	setJWT: (tokenJWT) => {},
});
