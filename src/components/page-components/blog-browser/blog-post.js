import React from "react";
import styled from "styled-components";
import variables from "../../../styles/variables";
import BlogPostThumbnail from "./blog-post-thumbnail";
import BlogPostTitle from "./blog-post-title";
import BlogPostDate from "./blog-post-date";
import BlogPostParagraph from "./blog-post-paragraph";
import { getHexWithAlpha } from "../../../../helpers/storyblok-helpers/color-helpers";
import { Link } from "gatsby";

const BlogPostCard = styled((props) => (
    <Link {...props} to={`/${props.node.full_slug}`}>
        <BlogPostThumbnail node={props.node} source={props.source} />
        <BlogPostTitle node={props.node} />
        <BlogPostDate node={props.node} />
        <BlogPostParagraph node={props.node} />
    </Link>
))`
    --blog-post-card-width: 450px;
    --blog-post-card-padding: 30px;
    padding: var(--blog-post-card-padding);
    width: var(--blog-post-card-width);

    background-color: ${(props) =>
        getHexWithAlpha(
            props.source.card_background_color.color,
            props.source.card_background_opacity
        )};

    height: auto;
    color: inherit;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.9);
    text-decoration: none;

    @media screen and (max-width: ${variables.screenWidthSmall}) {
        width: 100%;
        max-width: var(--blog-post-card-width);
    }
    @media screen and (max-width: ${variables.screenWidthExtraSmall}) {
        --blog-post-card-width: 420px;
        --blog-post-card-padding: 5vw;
    }
`;

const BlogPost = styled((props) => (
    <div {...props}>
        <BlogPostCard node={props.node} source={props.source} />
    </div>
))`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    width: auto;
    height: auto;
    min-width: 30%;
    max-width: 49%;
    padding: 0 50px 80px 50px;
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        min-width: 100%;
        max-width: 100%;
    }
    @media screen and (max-width: ${variables.screenWidthSmall}) {
        padding: 0 0 80px 0;
    }
`;
export default BlogPost;
