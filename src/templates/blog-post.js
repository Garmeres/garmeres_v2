import React from "react";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
    return <div>Hello</div>;
};

export default BlogPost;

export const Head = ({ data }) => {
    return <Seo seoNode={data.blogPost.seo} />;
};

export const query = graphql`
    query ($id: String) {
        blogPost: storyblokEntry(id: { eq: $id }) {
            id
            name
            lang
            slug
            uuid
            full_slug
            field_component
            default_full_slug
            content
            translated_slugs {
                lang
                name
                path
            }
            seo {
                lang
                title
                meta {
                    charSet
                    content
                    name
                    property
                }
                links {
                    href
                    hrefLang
                    rel
                    target
                }
            }
        }
    }
`;
