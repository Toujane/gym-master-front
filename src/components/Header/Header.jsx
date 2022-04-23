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

import logoImage from '../../assets/images/logo-transparent.png';
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';

const Header = () => {
	const context = useContext(userContext);
	const navigate = useNavigate();
	const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

	const handleLogOut = () => {
		context.user = null;
		console.log(context.user);
		navigate('/');
	};

	return (
		<>
			<HeaderWrapper $ishamburgeropened={isHamburgerOpened}>
				<HeaderImage alt='Logo image' src={logoImage} />
				<HeaderLinksWrapper $ishamburgeropened={isHamburgerOpened}>
					{context.user != null && <Button>Odabir termina</Button>}
					{!context.user && (
						<HeaderLink to='/register' onClick={() => setIsHamburgerOpened(false)}>
							Registracija
						</HeaderLink>
					)}
					{!context.user && (
						<HeaderLink to='/login' onClick={() => setIsHamburgerOpened(false)}>
							Prijava
						</HeaderLink>
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
		</>
	);
};

export default Header;
