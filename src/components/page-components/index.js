import React from "react";
import PageRichText from "./page-rich-text";

const resolvers = {
    rich_text: (props) => <PageRichText {...props} />,
    default: () => null,
};

export const DynamicPageComponent = (props) =>
    props.component == null || resolvers[props.component] == null
        ? resolvers.default(props)
        : resolvers[props.component](props);
