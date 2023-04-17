import React from "react";
import RichText from "../storyblok/rich-text";
import styled from "styled-components";
import variables from "../../styles/variables";

const PageRichText = styled((props) => (
    <RichText {...props} document={props.text} />
))`
    --page-content-width: ${variables.pageContentWidthDefault};
    width: var(--page-content-width);
    min-width: var(--page-content-width);
    max-width: var(--page-content-width);
    background-color: var(--bg-color-article);
    min-height: 50vh;
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
        --page-content-width: ${variables.pageContentWidthExtraLarge};
    }
    @media screen and (max-width: ${variables.screenWidthLarge}) {
        --page-content-width: ${variables.pageContentWidthLarge};
    }
    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        --page-content-width: ${variables.pageContentWidthMediumLarge};
    }
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        --page-content-width: ${variables.pageContentWidthMedium};
    }
    @media screen and (max-width: ${variables.screenWidthMediumSmall}) {
        --page-content-width: ${variables.pageContentWidthMediumSmall};
    }
    @media screen and (max-width: ${variables.screenWidthSmall}) {
        --page-content-width: ${variables.pageContentWidthSmall};
    }
    @media screen and (max-width: ${variables.screenWidthExtraSmall}) {
        --page-content-width: ${variables.pageContentWidthExtraSmall};
    }
`;

export default PageRichText;
