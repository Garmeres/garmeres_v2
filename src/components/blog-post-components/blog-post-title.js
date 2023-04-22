import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const BlogPostTitle = styled((props) => (
	<h1 {...props}>
		{props.source.lang === 'default'
			? props.source.name
			: props.source.translated_slugs.find(
					(slug) => slug.lang === props.source.lang
			  ).name}
	</h1>
))`
	max-width: ${variables.richTextWidthDefault};
	width: 100%;
	margin-left: auto;
	margin-right: auto;
`;

export default BlogPostTitle;
