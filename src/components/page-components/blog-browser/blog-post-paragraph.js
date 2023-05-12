import React from 'react';
import styled from 'styled-components';
import { bloksToText } from '../../../../helpers/storyblok-helpers/blok-to-text';

const BlogPostParagraph = styled((props) => {
	const blogPostText = bloksToText(props.node.content.body);
	const paragraphLength = 200;
	return (
		<p {...props}>
			{blogPostText.substring(0, paragraphLength).trim()}
			{blogPostText.length > paragraphLength ? '...' : null}
		</p>
	);
})`
	font-size: var(--font-size-extra-small);
	line-height: 1.5em;
	margin: 1em 0;
`;

export default BlogPostParagraph;
