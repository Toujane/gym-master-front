import styled from 'styled-components';
import { breakpoints } from '../../lib/style/theme';

export const ErrorWrapper = styled.span`
	position: fixed;
	left: 50%;
	top: 10%;
	transform: translateY(-50%);
	transform: translateX(-50%);

	width: 80%;

	@media screen and (${breakpoints.tablet}) {
		top: 30%;
		width: 500px;
	}
`;

export const ErrorInner = styled.span`
	font-size: 1.1rem;
`;
