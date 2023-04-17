import React from "react";
import PageRichText from "./page-rich-text";
import PageFeatured from "./featured";
import BlogBrowser from "./blog-browser";

const resolvers = {
    rich_text: (props) => <PageRichText {...props} />,
    featured: (props) => <PageFeatured {...props} />,
    blog_browser: (props) => <BlogBrowser {...props} />,
    default: () => null,
};

export const DynamicPageComponent = (props) =>
    props.component == null || resolvers[props.component] == null
        ? resolvers.default(props)
        : resolvers[props.component](props);
