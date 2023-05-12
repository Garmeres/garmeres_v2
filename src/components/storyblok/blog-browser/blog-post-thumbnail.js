import React from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';

const BlogPostThumbnail = styled((props) => {
	const thumbnail =
		props.node.content.thumbnail.filename !== ''
			? props.node.content.thumbnail
			: props.source.default_thumbnail;
	return (
		<img
			{...props}
			src={thumbnail.filename}
			alt={thumbnail.alt}
			title={thumbnail.copyright}
		/>
	);
})`
	--blog-post-thumbnail-width: calc(
		var(--blog-post-card-width) - calc(var(--blog-post-card-padding) * 2)
	);
	--blog-post-thumbnail-height: 350px;
	min-width: var(--blog-post-thumbnail-width);
	max-width: var(--blog-post-thumbnail-width);
	min-height: var(--blog-post-thumbnail-height);
	max-height: var(--blog-post-thumbnail-height);
	box-sizing: border-box;
	object-fit: cover;
	margin-bottom: 1em;

	@media screen and (max-width: ${variables.screenWidthMedium}) {
		--blog-post-thumbnail-width: 100%;
		--blog-post-thumbnail-height: 380px;
	}
	@media screen and (max-width: ${variables.screenWidthMediumSmall}) {
		--blog-post-thumbnail-height: 340px;
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--blog-post-thumbnail-height: 320px;
	}
	@media screen and (max-width: ${variables.screenWidthExtraSmall}) {
		--blog-post-thumbnail-width: 80vw;
		--blog-post-thumbnail-height: 75vw;
	}
`;

export default BlogPostThumbnail;
