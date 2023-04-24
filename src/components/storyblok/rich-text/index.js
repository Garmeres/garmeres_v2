import React from 'react';
import { render, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';
import RichTextImage from './rich-text-image';

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
							children={children}
							source={props.source}
						/>
					),
				},
			})}
		</RichTextContainer>
	);
}

export default RichText;
