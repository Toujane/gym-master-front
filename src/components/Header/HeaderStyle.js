import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, breakpoints, colors, transitionCubic } from '../../lib/style/theme';

import { FiLogOut } from 'react-icons/fi';

export const HeaderWrapper = styled.header`
	transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

	width: 100%;
	max-height: auto;
	height: ${(props) => (props.$ishamburgeropened ? '400px' : '50px')};
	padding: 10px 0;
	z-index: 1;
	margin-bottom: 0px;
	@media screen and (${breakpoints.desktop}) {
		height: 85px;
	}

	background-color: ${colors.blueLight};
	border-bottom: 1px solid ${colors.grey};
	box-shadow: ${boxShadow};
`;

export const HeaderImage = styled.img`
	position: absolute;
	top: 5px;
	left: 40px;
	width: 60px;
	object-fit: contain;

	@media screen and (${breakpoints.desktop}) {
		left: 100px;
		width: 115px;
	}
`;

export const HeaderLinksWrapper = styled.div`
	position: absolute;
	width: 90%;

	display: ${(props) => (props.$ishamburgeropened ? 'flex' : 'none')};
	padding-top: ${(props) => props.$ishamburgeropened && '100px'};

	flex-direction: ${(props) => (props.$ishamburgeropened ? 'column' : 'row')};
	justify-content: space-around;
	align-items: center;

	gap: ${(props) => props.$ishamburgeropened && '75px'};

	@media screen and (${breakpoints.tablet}) {
		padding-top: ${(props) => props.$ishamburgeropened && '75px'};
		flex-direction: ${(props) => (props.$ishamburgeropened ? 'row' : 'column')};
	}

	@media screen and (${breakpoints.desktop}) {
		flex-direction: ${(props) => (props.$ishamburgeropened ? 'column' : 'row')};
		height: 30px;
		margin: 15px 100px;
		display: flex;
		justify-content: flex-end;
		gap: 5%;
		padding-right: 5%;
	}
`;

export const HeaderLink = styled(Link)`
	display: block;
	text-decoration: none;
	font-size: larger;
	font-weight: 700;
	color: ${(props) => (props.$highlighted ? colors.blueMedium : colors.yellowLight)};
	background-color: ${(props) => props.$highlighted && colors.success};

	transition: ${transitionCubic};

	&:hover {
		cursor: pointer;
		color: hsl(203, 39%, 44%);
		color: ${colors.yellowLogo};
	}

	@media screen and (${breakpoints.desktop}) {
		display: block;
	}
`;

export const HeaderLogOutButton = styled(FiLogOut)`
	height: 30px;
	width: 30px;
	color: ${colors.error};

	transition: ${transitionCubic};

	&:hover {
		cursor: pointer;
		color: ${colors.grey};
	}
`;

export const HamburgerLinesWrapper = styled.div`
	position: absolute;
	right: 50px;
	top: 15px;
	display: flex;
	flex-direction: column;
	gap: 5px;

	cursor: pointer;

	@media screen and (${breakpoints.desktop}) {
		display: none;
	}
`;

export const HamburgerLine = styled.div`
	height: 4px;
	width: 30px;
	background-color: black;
`;
