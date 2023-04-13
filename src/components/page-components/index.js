import React from "react";
import PageRichText from "./page-rich-text";
import PageFeatured from "./featured";

const resolvers = {
    rich_text: (props) => <PageRichText {...props} />,
    featured: (props) => <PageFeatured {...props} />,
    default: () => null,
};

export const DynamicPageComponent = (props) =>
    props.component == null || resolvers[props.component] == null
        ? resolvers.default(props)
        : resolvers[props.component](props);
