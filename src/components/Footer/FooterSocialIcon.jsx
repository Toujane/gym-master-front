import React from 'react';
import { FooterSocialIconAddress, FooterSocialIconItalic } from './FooterStyle';

const FooterSocialIcon = ({ url, component }) => {
	return (
		<FooterSocialIconAddress href={url}>
			<FooterSocialIconItalic>{component}</FooterSocialIconItalic>
		</FooterSocialIconAddress>
	);
};

export default FooterSocialIcon;
