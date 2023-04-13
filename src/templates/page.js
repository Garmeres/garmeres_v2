import React from "react";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RichText from "../components/storyblok/rich-text";
import variables from "../styles/variables";

const BakgroundImage = styled((props) => {
    const imageBlok = JSON.parse(props.pagenode.content).background_image;
    if (imageBlok == null) {
        return null;
    }
    const gatsbyImage = props.pagenode.imageFiles.find(
        (item) => item != null && item.url === imageBlok.filename
    );
    return (
        <GatsbyImage
            image={getImage(gatsbyImage)}
            alt={imageBlok.alt}
            {...props}
        />
    );
})`
    height: 100%;
    width: 100%;
    filter: blur(2px);
    left: 0;
    right: 0;
    object-fit: cover;
    max-height: 75vh;
    opacity: 1;
    @media screen and (max-width: ${variables.screenWidthMediumSmall}) {
        max-height: 30vh;
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: black;
`;

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

const PageBodyRichText = styled((props) => <RichText {...props} />)`
    padding: 10vh 5vw;
    box-sizing: border-box;
`;

const Page = ({ data }) => {
    let i = 0;
    return (
        <Layout menuNode={data.menu} source={data.page}>
            <Background
                backgroundColor={
                    JSON.parse(data.page.content).background_color.color
                }
            >
                <BakgroundImage pagenode={data.page} />
            </Background>
            <PageBody>
                {JSON.parse(data.page.content).body.map((bodyItem) =>
                    bodyItem.component === "rich_text" ? (
                        <PageBodyRichText key={i++} document={bodyItem.text} />
                    ) : null
                )}
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
                    gatsbyImageData(layout: FULL_WIDTH, quality: 80)
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
