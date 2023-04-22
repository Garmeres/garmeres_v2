import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const BlogPostDateAndAuthor = styled((props) => {
	const date = new Date(Date.parse(props.source.first_published_at));
	const day = date.getDate().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	const month = (date.getMonth() + 1).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	const year = date.getFullYear();
	const author = JSON.parse(props.source.content).author;
	const authorString = author != null && author !== '' ? ` - ${author}` : '';
	return <span {...props}>{`${day}.${month}.${year}${authorString}`}</span>;
})`
	max-width: ${variables.richTextWidthDefault};
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10pt;
	opacity: 0.75;
`;

export default BlogPostDateAndAuthor;
