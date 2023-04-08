import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
    return <div>Hello</div>;
};

export default BlogPost;

export const Head = ({ location, params, data, pageContext }) => {
    console.log(data.blogPost);
    console.log(JSON.parse(data.blogPost.content));
    return <SEO {...data.blogPost.fields.seo}></SEO>;
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
            fields {
                seo {
                    title
                    description
                }
            }
        }
    }
`;
