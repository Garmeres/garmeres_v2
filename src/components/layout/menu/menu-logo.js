import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import variables from '../../../styles/variables';

const LogoLink = styled((props) => (
	<Link
		{...props}
		to={props.homeslug}
	/>
))`
	--logo-size: 70px;
	height: 100%;
	width: fit-content;
	display: flex;
	flex-direction: row;
	text-decoration: none;

	@media screen and (max-width: ${variables.screenWidthMediumLarge}) {
		--logo-size: 60px;
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--logo-size: 50px;
	}
`;

const LogoImage = styled((props) => <GatsbyImage {...props} />)`
	border-radius: 5px;
	width: var(--logo-size);
	min-width: var(--logo-size);
	height: var(--logo-size);
	min-height: var(--logo-size);
`;

const LogoText = styled.span`
	color: var(--text-color-light);
	font-size: var(--font-size-medium-large);
	display: flex;
	vertical-align: middle;
	align-items: center;
	justify-content: center;
	margin-left: 0.7em;

	@media screen and (max-width: ${variables.screenWidthMediumLarge}) {
		font-size: var(--font-size-medium-large);
		margin-left: 0.5em;
	}

	@media screen and (max-width: ${variables.screenWidthMedium}) {
		font-size: var(--font-size-medium-large);
	}
`;

const getLogoImageNode = (menuNode) =>
	menuNode.imageFiles.find(
		(file) => file.url === JSON.parse(menuNode.content).logo.filename
	);

const MenuLogo = ({ menuNode, homeSlug }) => (
	<LogoLink homeslug={homeSlug}>
		<LogoImage
			image={getImage(getLogoImageNode(menuNode))}
			alt={JSON.parse(menuNode.content).logo.alt}
		/>
		<LogoText>{JSON.parse(menuNode.content).logo_text}</LogoText>
	</LogoLink>
);

export default MenuLogo;
