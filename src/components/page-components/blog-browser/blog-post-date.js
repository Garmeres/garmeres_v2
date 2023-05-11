import React from 'react';
import styled from 'styled-components';

const BlogPostDate = styled((props) => {
	const date = new Date(Date.parse(props.node.first_published_at));
	const day = date.getDate().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	const month = (date.getMonth() + 1).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	const year = date.getFullYear();
	return <span {...props}>{`${day}.${month}.${year}`}</span>;
})`
	opacity: 0.8;
	font-size: 1em;
	font-family: Bellota Text;
`;

export default BlogPostDate;
