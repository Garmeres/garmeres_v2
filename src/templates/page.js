import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const Page = ({ data }) => {
    return <div>Hello</div>;
};

export default Page;

export const Head = ({ data }) => {
    return <SEO seoNode={data.page.seo} />;
};

export const query = graphql`
    query ($id: String) {
        page: storyblokEntry(id: { eq: $id }) {
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
