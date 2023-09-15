import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import variables from '../../../styles/variables';

const H1 = styled.h1`
	font-size: var(--font-size-extra-large);
	font-family: 'Quicksand' !important;
	font-weight: 400;
	@media screen and ((max-width: ${variables.screenWidthSmall}) or (max-height: ${variables.screenWidthSmall})) {
		font-size: var(--font-size-large);
	}
`;
const P = styled.p`
	font-size: var(--font-size-medium-small);
	font-family: 'Quicksand' !important;
	font-weight: 500;
	margin: var(--font-size-medium-small) auto;
	@media screen and ((max-width: ${variables.screenWidthSmall}) or (max-height: ${variables.screenWidthSmall})) {
		font-size: var(--font-size-small);
		margin: var(--font-size-small) auto;
	}
`;
const CallToAction = styled((props) => <Link {...props} />)`
	font-family: 'Quicksand' !important;
	font-size: var(--font-size-medium-small);
	text-decoration: none;
	margin: var(--font-size-medium-small) auto;
	padding: 1em 1.5em;
	color: white;
	min-width: 10vw;
	border-radius: 5px;
	outline-color: red;

	background-color: var(--theme-color-dark-blue);
	font-weight: 500;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

	@media screen and ((max-width: ${variables.screenWidthSmall}) or (max-height: ${variables.screenWidthSmall})) {
		font-size: var(--font-size-small);
		margin: var(--font-size-small) auto;
	}

	@media (prefers-color-scheme: light) {
		background-color: var(--theme-color-light-green);
		color: var(--text-color-dark);
	}
`;

const resolvers = {
	featured_title: (props) => <H1>{props.featuredComponent.text}</H1>,
	featured_text: (props) => <P>{props.featuredComponent.text}</P>,
	call_to_action: (props) => (
		<CallToAction to={`/${props.featuredComponent.link.story.full_slug}`}>
			{props.featuredComponent.text}
		</CallToAction>
	),
	default: () => null,
};

export const DynamicFeaturedComponent = (props) =>
	props.featuredComponent.component != null &&
	resolvers[props.featuredComponent.component] != null
		? resolvers[props.featuredComponent.component](props)
		: resolvers.default(props);
