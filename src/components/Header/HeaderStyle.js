import styled from 'styled-components';
import { colors } from '../../lib/style/theme';

export const HeaderWrapper = styled.header`
	background-color: ${colors.white};
	box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
	width: 100%;
	height: 70px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 15;
`;

export const Inner = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	max-width: 1450px;

	margin: 0 40px;
`;
