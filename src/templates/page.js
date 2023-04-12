import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Page = ({ data }) => {
    return (
        <Layout menuNode={data.menu} source={data.page}>
            Hello
        </Layout>
    );
};

export default Page;

export const Head = ({ data }) => {
    return <SEO seoNode={data.page.seo} />;
};

export const query = graphql`
    query ($id: String, $lang: String) {
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
            imageFiles {
                url
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
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
        menu: storyblokEntry(
            lang: { eq: $lang }
            field_component: { eq: "menu" }
        ) {
            lang
            content
            imageFiles {
                url
                childImageSharp {
                    gatsbyImageData(width: 100, quality: 90)
                }
            }
            storyblokLinks {
                id
                uuid
                real_path
                name
                slug
                alternates {
                    lang
                    name
                    path
                }
            }
        }
    }
`;
