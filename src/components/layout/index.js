import React from 'react';
import Menu from './menu';
import styled from 'styled-components';
import LayoutBackground from './layout-background';
import StoryblokWrapper from '../storyblok';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'gatsby';

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;
const Main = styled.main`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	height: auto;
	width: 100%;
	position: relative;
	top: 0;
	bottom: 0;
	box-sizing: border-box;
`;

const Layout = ({
	menuNode,
	footerNode,
	source,
	homeSlug,
	children,
	backgroundColor,
	backgroundImage,
	backgroundImageAlt,
	backgroundImageCopyright,
}) => (
	<StoryblokWrapper>
		<CookieConsent
			location='bottom'
			buttonText='Accept'
			declineButtonText='Decline'
			cookieName='gatsby-gdpr-google-analytics'
		>
			<p>
				This site uses Google Analytics 4 to collect anonymised usage data. By
				clicking the "Accept" button, you consent to the use of cookies and data
				collection. For more information, please review our{' '}
				<Link to='/privacy-policy'>Privacy policy</Link>.
			</p>
		</CookieConsent>
		<LayoutContainer>
			<Menu
				{...storyblokEditable(menuNode)}
				menuNode={menuNode}
				source={source}
				homeSlug={homeSlug}
			/>
			<Main {...storyblokEditable(source)}>
				<LayoutBackground
					backgroundColor={backgroundColor}
					backgroundImage={backgroundImage}
					backgroundImageAlt={backgroundImageAlt}
					backgroundImageCopyright={backgroundImageCopyright}
				/>
				{children}
			</Main>
			<StoryblokComponent
				{...storyblokEditable(footerNode)}
				blok={{
					component: 'footer',
					...footerNode,
				}}
				lang={menuNode.lang}
				backgroundImageCopyright={backgroundImageCopyright}
			></StoryblokComponent>
		</LayoutContainer>
	</StoryblokWrapper>
);

export default Layout;
