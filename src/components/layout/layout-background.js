import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import variables from '../../styles/variables';

const BakgroundImage = styled((props) => (
	<GatsbyImage
		title='Background image'
		{...props}
	/>
))`
	position: relative;
	top: 0;
	height: 100%;
	width: 100%;
	filter: blur(1px);
	left: 0;
	right: 0;
	bottom: 0;
	object-fit: cover;
	opacity: 1;
	border: none;
	background-size: auto 100%;
	max-height: 90vh;
	@media screen and (max-width: ${variables.screenWidthMedium}) {
		max-height: 75vh;
	}
	@media screen and (max-width: ${variables.screenWidthExtraSmall}) {
		max-height: 90vh;
	}
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-grow: 1;
	z-index: -1;
	background-color: ${(props) => props.backgroundColor};
	box-sizing: border-box;
	overflow: hidden;
`;

const LayoutBackground = ({
	backgroundColor,
	backgroundImage,
	backgroundImageAlt,
}) => {
	return (
		<Background
			backgroundColor={backgroundColor}
			hasbackgroundimage={backgroundImage != null}
		>
			{backgroundImage != null ? (
				<BakgroundImage
					image={backgroundImage}
					alt={backgroundImageAlt}
				/>
			) : null}
		</Background>
	);
};

export default LayoutBackground;
