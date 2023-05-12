import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import variables from '../../styles/variables';

const ThumbnailCopyright = styled((props) => {
	const copyright = JSON.parse(props.source.content).thumbnail.copyright;
	return copyright != null && copyright !== '' ? (
		<span {...props}>{copyright}</span>
	) : null;
})`
	margin: 16pt auto;
`;

const ThumbnailImage = (props) => {
	const imgBlok = JSON.parse(props.source.content).thumbnail;
	const thumbnailImage = props.source.imageFiles.find(
		(item) => item.url === imgBlok.filename
	);
	return thumbnailImage != null ? (
		<GatsbyImage
			{...props}
			image={thumbnailImage.childImageSharp.gatsbyImageData}
			alt={imgBlok.alt}
			objectFit='contain'
		/>
	) : null;
};

const BlogPostThumbnail = styled((props) => (
	<div {...props}>
		<ThumbnailImage source={props.source} />
		<ThumbnailCopyright source={props.source} />
	</div>
))`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: ${variables.richTextWidthDefault};
	margin: 1em auto;
	img {
		max-height: 65vh;
		@media screen and (max-height: ${variables.screenWidthSmall}) {
			max-height: 90vh;
		}
	}
`;

export default BlogPostThumbnail;
