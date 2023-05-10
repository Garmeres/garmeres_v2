import React from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import { DynamicFeaturedComponent } from './featured-components';

const PageFeatured = styled((props) => {
	let i = 0;
	return props.body.length > 0 ? (
		<div {...props}>
			{props.body.map((featuredItem) => (
				<DynamicFeaturedComponent
					key={i++}
					featuredComponent={featuredItem}
				/>
			))}
		</div>
	) : null;
})`
	--horizontal-padding: 20vw;
	--vertical-padding: 5vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-color: rgba(255, 255, 255, 0.9);
	margin: 0 auto;
	min-height: 45vh;
	text-align: center;
	padding: var(--vertical-padding) var(--horizontal-padding);
	box-sizing: border-box;

	&:nth-child(2) {
		margin: 15vh auto;
		box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.8);
		@media screen and (max-width: ${variables.screenWidthMedium}) {
			margin: 10vh auto;
		}
	}
	@media screen and (max-width: ${variables.screenWidthMedium}) {
		--horizontal-padding: 10vw;
	}
	@media screen and (max-width: ${variables.screenWidthMediumSmall}) {
		--horizontal-padding: 5vw;
	}

	@media screen and ((max-height: ${variables.screenWidthMedium}) or (max-width: ${variables.screenWidthMediumLarge})) {
		min-height: 40vh;
	}
	@media screen and ((max-height: ${variables.screenWidthSmall}) or (max-width: ${variables.screenWidthMedium})) {
		min-height: 25vh;
	}
`;

export default PageFeatured;
