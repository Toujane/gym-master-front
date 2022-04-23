import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { UserContext } from './context/userContext';
import { Main } from './lib/style/generalStyles';
import Error from './pages/Error/Error';
import './App.css';

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [jwtToken, setJWTToken] = useState('');

	useEffect(() => {
		console.log(jwtToken);
	}, [jwtToken]);

	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Error message='Nažalost, ovdje nema ništa.' />} />
				</Routes>
			</Main>
			<Footer />
		</>
	);
}

export default App;
