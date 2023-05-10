import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import variables from '../../../styles/variables';

const H1 = styled.h1`
	font-size: 42pt;
	font-family: 'Quicksand' !important;
	font-weight: 400;
	margin: 16pt auto;

	@media screen and ((max-height: ${variables.screenWidthMedium}) or (max-width: ${variables.screenWidthMediumLarge})) {
		font-size: 36pt;
		margin: 15pt auto;
	}
	@media screen and ((max-height: ${variables.screenWidthSmall}) or (max-width: ${variables.screenWidthMedium})) {
		font-size: 32pt;
		margin: 14pt auto;
	}
`;
const P = styled.p`
	font-size: 14pt;
	font-family: 'Quicksand' !important;
	font-weight: 500;
	margin: 16pt auto;
	@media screen and ((max-height: ${variables.screenWidthMedium}) or (max-width: ${variables.screenWidthMediumLarge})) {
		font-size: 13pt;
		margin: 15pt auto;
	}
	@media screen and ((max-height: ${variables.screenWidthSmall}) or (max-width: ${variables.screenWidthMedium})) {
		font-size: 12pt;
		margin: 14pt auto;
	}
`;
const CallToAction = styled((props) => <Link {...props} />)`
	font-family: 'Quicksand' !important;
	text-decoration: none;
	background-color: #000000;
	margin: 16pt auto;
	padding: 10px;
	color: white;
	min-width: 10vw;
	border-radius: 5px;
	@media screen and ((max-height: ${variables.screenWidthMedium}) or (max-width: ${variables.screenWidthMediumLarge})) {
		font-size: 13pt;
		margin: 15pt auto;
	}
	@media screen and ((max-height: ${variables.screenWidthSmall}) or (max-width: ${variables.screenWidthMedium})) {
		font-size: 12pt;
		margin: 14pt auto;
	}
`;

const resolvers = {
	featured_title: (props) => <H1>{props.featuredComponent.text}</H1>,
	featured_text: (props) => <P>{props.featuredComponent.text}</P>,
	call_to_action: (props) => {
		console.log(props.featuredComponent);
		return (
			<CallToAction to={`/${props.featuredComponent.link.story.full_slug}`}>
				{props.featuredComponent.text}
			</CallToAction>
		);
	},
	default: () => null,
};

export const DynamicFeaturedComponent = (props) =>
	props.featuredComponent.component != null &&
	resolvers[props.featuredComponent.component] != null
		? resolvers[props.featuredComponent.component](props)
		: resolvers.default(props);
