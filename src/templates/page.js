import React from "react";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { DynamicPageComponent } from "../components/page-components";

const Page = ({ data }) => {
    const bgImageBlok = JSON.parse(data.page.content).background_image;
    const bgGatsbyImage =
        bgImageBlok != null
            ? getImage(
                  data.page.imageFiles.find(
                      (item) =>
                          item != null && item.url === bgImageBlok.filename
                  )
              )
            : null;
    let i = 0;
    return (
        <Layout
            menuNode={data.menu}
            source={data.page}
            backgroundImage={bgGatsbyImage}
            backgroundImageAlt={bgImageBlok != null ? bgImageBlok.alt : null}
            backgroundImageCopyright={
                bgImageBlok != null ? bgImageBlok.copyright : null
            }
            backgroundColor={
                JSON.parse(data.page.content).background_color.color
            }
        >
            {JSON.parse(data.page.content).body.map((bodyItem) => (
                <DynamicPageComponent key={i++} {...bodyItem} />
            ))}
        </Layout>
    );
};

export default Page;

export const Head = ({ data }) => <Seo seoNode={data.page.seo} />;

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
                    gatsbyImageData(layout: FULL_WIDTH, quality: 50)
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
