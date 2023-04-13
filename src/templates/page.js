import React from "react";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import styled from "styled-components";
import variables from "../styles/variables";
import { DynamicPageComponent } from "../components/page-components";

const PageBody = styled.div`
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
    margin-top: 25vh;
    @media screen and (max-width: ${variables.screenWidthExtraLarge}) {
        --page-content-width: 80%;
    }
    @media screen and (max-width: ${variables.screenWidthLarge}) {
        --page-content-width: 90%;
        margin-top: 30vh;
    }
    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        --page-content-width: 95%;
    }
    @media screen and (max-width: ${variables.screenWidthMedium}) {
    }
    @media screen and (max-width: ${variables.screenWidthMediumSmall}) {
        --page-content-width: 100%;
    }
    @media screen and (max-width: ${variables.screenWidthSmall}) {
    }
`;

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
            <PageBody>
                {JSON.parse(data.page.content).body.map((bodyItem) => (
                    <DynamicPageComponent key={i++} {...bodyItem} />
                ))}
            </PageBody>
        </Layout>
    );
};

export default Page;

export const Head = ({ data }) => {
    return <Seo seoNode={data.page.seo} />;
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
