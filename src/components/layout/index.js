import React from 'react';
import Menu from './menu';
import styled from 'styled-components';
import LayoutBackground from './layout-background';
import StoryblokWrapper from '../storyblok';
import { StoryblokComponent } from 'gatsby-source-storyblok';

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
		<LayoutContainer>
			<Menu
				menuNode={menuNode}
				source={source}
				homeSlug={homeSlug}
			/>
			<Main>
				<LayoutBackground
					backgroundColor={backgroundColor}
					backgroundImage={backgroundImage}
					backgroundImageAlt={backgroundImageAlt}
					backgroundImageCopyright={backgroundImageCopyright}
				/>
				{children}
			</Main>
			<StoryblokComponent
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
