import React from "react";
import styled from "styled-components";
import { bloksToText } from "../../../../helpers/storyblok-helpers/blok-to-text";

const BlogPostParagraph = styled((props) => {
    const blogPostText = bloksToText(props.node.content.body);
    return (
        <p {...props}>
            {blogPostText.substring(0, 100).trim()}
            {blogPostText.length > 100 ? "..." : null}
        </p>
    );
})`
    margin-bottom: 12pt;
`;

export default BlogPostParagraph;
