import React, { useContext, useState } from 'react';
import {
	HamburgerLine,
	HamburgerLinesWrapper,
	HeaderImage,
	HeaderLink,
	HeaderLinksWrapper,
	HeaderLogOutButton,
	HeaderWrapper,
} from './HeaderStyle';
import { Badge, Modal } from 'react-bootstrap';

import logoImage from '../../assets/images/logo-transparent.png';
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import Login from '../login/Login';
import Register from '../register/Register';

const Header = () => {
	const context = useContext(userContext);
	const navigate = useNavigate();
	const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

	const handleLogOut = () => {
		context.user = null;
		console.log(context.user);
		navigate('/');
	};

	const [modalShow, setModalShow] = useState(false);
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<HeaderWrapper $ishamburgeropened={isHamburgerOpened}>
				<HeaderImage alt='Logo image' src={logoImage} />
				<HeaderLinksWrapper $ishamburgeropened={isHamburgerOpened}>
					{context.user != null && <Button>Odabir termina</Button>}
					{!context.user && (
						<Button
							variant='light'
							onClick={() => {
								setIsHamburgerOpened(false);
								setModalShow(true);
							}}>
							Prijava
						</Button>
					)}
					{context.user?.isAdmin && (
						<HeaderLink to='/dashboard' onClick={() => setIsHamburgerOpened(false)}>
							Upravljačka ploča
						</HeaderLink>
					)}
					{context.user?.jwt != '' && <HeaderLogOutButton onClick={handleLogOut} />}
				</HeaderLinksWrapper>
				<HamburgerLinesWrapper
					onClick={() => setIsHamburgerOpened((currentState) => !currentState)}
					$ishamburgeropened={isHamburgerOpened}>
					<HamburgerLine />
					<HamburgerLine />
					<HamburgerLine />
				</HamburgerLinesWrapper>
			</HeaderWrapper>
			<Modal show={modalShow} onHide={() => setModalShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>
						<Badge
							pill
							bg={isLogin ? 'primary' : 'secondary'}
							className='me-3 pills'
							onClick={() => setIsLogin(true)}>
							Prijava
						</Badge>
						/
						<Badge
							pill
							bg={isLogin ? 'secondary' : 'primary'}
							className='ms-3 pills'
							onClick={() => setIsLogin(false)}>
							Registracija
						</Badge>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{isLogin ? <Login /> : <Register />}</Modal.Body>
			</Modal>
		</>
	);
};

export default Header;
