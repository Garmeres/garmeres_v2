import React from 'react';
import styled from 'styled-components';
import FooterSocial from './footer-social';
import RichText from '../rich-text';
import { storyblokEditable } from 'gatsby-source-storyblok';

const StyledFooter = styled.footer`
	--footer-height: 300px;
	color: var(--text-color-light);
	background-color: var(--bg-color-medium);
	font-size: var(--font-size-extra-small);
	display: flex;
	justify-content: center;
	width: 100vw;
	min-height: var(--footer-height);
	padding: 30px 50px;
	box-sizing: border-box;
`;

const FooterInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const FooterBackgroundCopyright = styled.p`
	margin: 0;
	margin-top: 20px;
	text-align: center;
`;

const Footer = (props) => (
	<StyledFooter {...storyblokEditable(props.blok)}>
		<FooterInnerContainer>
			<FooterSocial lang={props.lang} />
			{props.backgroundImageCopyright != null ? (
				<FooterBackgroundCopyright>
					{props.backgroundImageCopyright}
				</FooterBackgroundCopyright>
			) : null}
			<RichText
				className='footer'
				blok={{
					text: props.blok.content.body_text,
				}}
			/>
		</FooterInnerContainer>
	</StyledFooter>
);

export default Footer;
