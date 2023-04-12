import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import RichText from "../../storyblok/rich-text";
import FooterSocial from "./footer-social";

const StyledFooter = styled.footer`
    color: var(--text-color-light);
    background-color: var(--bg-color-medium);
    font-size: var(--paragraph-font-size-medium);
    display: flex;
    justify-content: center;
    width: 100vw;
    min-height: 300px;
    padding: 30px 50px;
    box-sizing: border-box;
`;

const FooterInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FooterRichText = styled((props) => <RichText {...props} />)`
    text-align: center;
    color: inherit;
    a {
        color: var(--theme-color-light-blue);
    }
`;

const Footer = ({ lang }) => {
    const data = useStaticQuery(graphql`
        query {
            footers: allStoryblokEntry(
                filter: { field_component: { eq: "footer" } }
            ) {
                edges {
                    node {
                        lang
                        full_slug
                        content
                    }
                }
            }
        }
    `);
    const footerNode = data.footers.edges.find(
        ({ node }) => node.lang === lang
    ).node;
    return (
        <StyledFooter>
            <FooterInnerContainer>
                <FooterSocial lang={lang} />
                <FooterRichText
                    document={JSON.parse(footerNode.content).body_text}
                />
            </FooterInnerContainer>
        </StyledFooter>
    );
};

export default Footer;