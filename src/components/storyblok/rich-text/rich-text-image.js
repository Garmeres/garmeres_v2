import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const RichTextImageCopyright = styled.span`
	margin: 12pt auto;
`;

const RichTextImage = styled((props) => {
	const imgBlok = props.source.richTextImages.find(
		(imgFile) => imgFile.url === props.src
	);
	return imgBlok != null ? (
		<span {...props}>
			<GatsbyImage
				image={imgBlok.childImageSharp.gatsbyImageData}
				alt={props.alt}
				as='span'
			/>
			<RichTextImageCopyright>{props.copyright}</RichTextImageCopyright>
		</span>
	) : null;
})`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	margin: 24pt auto;
	img {
		width: unset;
		margin: auto;
	}
`;

export default RichTextImage;
