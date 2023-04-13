import React from "react";
import RichText from "../storyblok/rich-text";
import styled from "styled-components";
import variables from "../../styles/variables";

const PageRichText = styled((props) => (
    <RichText {...props} document={props.text} />
))`
    --page-content-width: 75%;
    width: var(--page-content-width);
    min-width: var(--page-content-width);
    max-width: var(--page-content-width);
    background-color: var(--bg-color-article);
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    flex-grow: 1;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10vh 5vw;

    &:nth-child(2) {
        margin-top: 25vh;
        @media screen and (max-width: ${variables.screenWidthLarge}) {
            margin-top: 30vh;
        }
        @media screen and (max-width: ${variables.screenWidthMedium}) {
            margin-top: 40vh;
        }
    }

    @media screen and (max-width: ${variables.screenWidthExtraLarge}) {
        --page-content-width: 80%;
    }
    @media screen and (max-width: ${variables.screenWidthLarge}) {
        --page-content-width: 90%;
    }
    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        --page-content-width: 95%;
    }
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        --page-content-width: 100%;
    }
    @media screen and (max-width: ${variables.screenWidthMediumSmall}) {
    }
    @media screen and (max-width: ${variables.screenWidthSmall}) {
    }
`;

export default PageRichText;
