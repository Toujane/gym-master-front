import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';
import FooterSocialIcon from './FooterSocialIcon';
import { AboutUsSection, SocialIcons, SocialSection, VisitUs, Wrapper } from './FooterStyle';

const socials = [
	{
		url: 'https://facebook.com',
		component: BsFacebook,
	},
	{
		url: 'https://instagram.com',
		component: BsInstagram,
	},
	{
		url: 'https://twitter.com',
		component: BsTwitter,
	},
	{
		url: 'https://hr-linkedin.com',
		component: BsLinkedin,
	},
	{
		url: 'https://youtube.com',
		component: BsYoutube,
	},
];

const Footer = () => {
	return (
		<Wrapper>
			<SocialSection>
				<VisitUs>Posjetite nas na našim društvenim mrežama</VisitUs>

				<SocialIcons>
					{socials.map((value) => {
						<FooterSocialIcon url={value.url} component={value.component} />;
					})}
				</SocialIcons>
			</SocialSection>

			<AboutUsSection>&copy; 2022 Toujane Team</AboutUsSection>
		</Wrapper>
	);
};

export default Footer;
