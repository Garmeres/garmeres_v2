import React from "react";
import RichText from "../storyblok/rich-text";
import styled from "styled-components";

const PageRichText = styled((props) => (
    <RichText {...props} document={props.text} />
))`
    padding: 10vh 5vw;
    box-sizing: border-box;
`;

export default PageRichText;
