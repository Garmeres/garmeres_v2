import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import variables from '../../../styles/variables';

const RichTextImageCopyright = styled.span`
	margin: 12pt auto;
`;

const RichTextImage = styled((props) => {
	const imgBlok = props.source.imageFiles.find(
		(imgFile) => imgFile.url === props.src
	);
	return imgBlok != null ? (
		<span {...props}>
			<GatsbyImage
				image={imgBlok.childImageSharp.gatsbyImageData}
				alt={props.alt}
				as='span'
				objectFit='contain'
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
		max-height: 65vh;
		width: unset;
		margin: auto;
		@media screen and (max-height: ${variables.screenWidthSmall}) {
			max-height: 90vh;
		}
	}
`;

export default RichTextImage;
