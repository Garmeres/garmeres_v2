import React from 'react';
import styled from 'styled-components';

const BlogPostTitle = styled((props) => {
	let title =
		props.node.lang !== 'default'
			? props.node.translated_slugs.find(
					(item) => item.lang === props.node.lang
			  ).name
			: props.node.name;
	if (title == null) {
		title = props.node.name;
	}
	return <h2 {...props}>{title}</h2>;
})`
	font-size: 1.2em;
	margin: 1.2em 0;
	font-family: Bellota Text;
`;

export default BlogPostTitle;
