import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

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
	const thumbnailImage = props.source.richTextImages.find(
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
	margin: 12pt auto;
`;

export default BlogPostThumbnail;
