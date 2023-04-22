import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { render, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';

const RichTextImage = styled((props) => {
	let imgBlok = props.source.richTextImages.find(
		(imgFile) => imgFile.url === props.src
	);
	return (
		<GatsbyImage
			{...props}
			image={imgBlok.childImageSharp.gatsbyImageData}
			alt={props.alt}
			as='span'
		/>
	);
})`
	display: flex;
	margin: 24pt auto;

	img {
		width: unset;
		margin: auto;
	}
`;

const RichTextContainer = styled.div``;

function RichText(props) {
	// document is the rich text object you receive from Storyblok,
	// in the form { type: "doc", content: [ ... ] }
	return (
		<RichTextContainer {...props}>
			{render(props.document, {
				nodeResolvers: {
					[NODE_IMAGE]: (children, p) => (
						<RichTextImage
							{...p}
							source={props.source}
						/>
					),
				},
			})}
		</RichTextContainer>
	);
}

export default RichText;
