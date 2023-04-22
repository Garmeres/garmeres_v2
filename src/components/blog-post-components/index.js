import React from 'react';
import BlogPostRichText from './blog-post-rich-text';

const resolvers = {
	rich_text: (props) => <BlogPostRichText {...props} />,
	default: () => null,
};

export const DynamicBlogPostComponent = (props) =>
	props.component == null || resolvers[props.component] == null
		? resolvers.default(props)
		: resolvers[props.component](props);
