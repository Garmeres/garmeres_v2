import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import RichText from "../../storyblok/rich-text";
import FooterSocial from "./footer-social";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100vw;
    min-height: 300px;
    background-color: #333;
    color: white;
    font-size: 14pt;
    padding: 30px 50px;
    box-sizing: border-box;
    a {
        color: #79ddeb;
    }
`;

const FooterInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
                <RichText
                    document={JSON.parse(footerNode.content).body_text}
                    style={{
                        textAlign: "center",
                    }}
                />
            </FooterInnerContainer>
        </StyledFooter>
    );
};

export default Footer;
