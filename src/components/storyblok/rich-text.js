import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";

const RichTextContainer = styled.div``;

function RichText(props) {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return (
        <RichTextContainer {...props}>
            {render(props.document)}
        </RichTextContainer>
    );
}

export default RichText;
