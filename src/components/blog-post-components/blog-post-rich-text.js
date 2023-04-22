import React from 'react';
import RichText from '../storyblok/rich-text';
import styled from 'styled-components';
import variables from '../../styles/variables';

const BlogPostRichText = styled((props) => (
	<RichText
		{...props}
		document={props.text}
	/>
))`
	max-width: ${variables.richTextWidthDefault};
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

export default BlogPostRichText;
