import React from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import BlogPostThumbnail from './blog-post-thumbnail';
import BlogPostTitle from './blog-post-title';
import BlogPostDate from './blog-post-date';
import BlogPostParagraph from './blog-post-paragraph';
import { getHexWithAlpha } from '../../../../helpers/storyblok-helpers/color-helpers';
import { Link } from 'gatsby';

const BlogPostCard = styled((props) => (
	<Link
		{...props}
		to={`/${props.node.full_slug}`}
	>
		<BlogPostThumbnail
			node={props.node}
			source={props.source}
		/>
		<BlogPostTitle node={props.node} />
		<BlogPostDate node={props.node} />
		<BlogPostParagraph node={props.node} />
	</Link>
))`
	--blog-post-card-width: 450px;
	--blog-post-card-padding: 30px;
	padding: var(--blog-post-card-padding);
	width: var(--blog-post-card-width);
	outline-color: var(--highlight-color-light);

	background-color: ${(props) =>
		getHexWithAlpha(
			props.source.card_background_color.color,
			props.source.card_background_opacity
		)};

	height: auto;
	color: inherit;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	text-decoration: none;

	@media screen and (max-width: ${variables.screenWidthMediumSmall}) {
		width: 100%;
		max-width: var(--blog-post-card-width);
		--blog-post-card-width: 400px;
		--blog-post-card-padding: 15px;
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--blog-post-card-width: 360px;
	}
	@media screen and (max-width: ${variables.screenWidthExtraSmall}) {
		--blog-post-card-width: 80vw;
		--blog-post-card-padding: 0;
	}

	:hover {
		h2 {
			text-decoration: underline;
		}
	}
`;

const BlogPost = styled((props) => (
	<div {...props}>
		<BlogPostCard
			node={props.node}
			source={props.source}
		/>
	</div>
))`
	display: flex;
	flex-direction: row;
	justify-content: center;
	box-sizing: border-box;
	overflow: hidden;
	margin: 0;
	width: auto;
	height: auto;
	min-width: 30%;
	max-width: 49%;
	padding: 0 2.5em 8em 2.5em;
	@media screen and (max-width: ${variables.screenWidthMedium}) {
		min-width: 100%;
		max-width: 100%;
	}
	@media screen and (max-width: ${variables.screenWidthMediumSmall}) {
		padding: 0 0 6em 0;
	}

	@media screen and (max-width: ${variables.screenWidthExtraSmall}) {
	}
`;
export default BlogPost;
