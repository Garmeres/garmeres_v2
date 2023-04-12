import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import SocialIcon from "./social-icon";

const Social = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
`;

const SocialLink = styled.a`
    color: white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 0 20px;
`;

const iconStyle = {
    color: "white",
    width: "100%",
    height: "100%",
};

const FooterSocial = ({ lang }) => {
    const data = useStaticQuery(graphql`
        query {
            socials: allStoryblokEntry(
                filter: { field_component: { eq: "social" } }
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
    const socialNode = data.socials.edges.find(
        ({ node }) => node.lang === lang
    ).node;

    const content = JSON.parse(socialNode.content);
    return (
        <Social>
            {content.items.map((item) => (
                <SocialLink key={item.name} href={item.url.url} {...item.url}>
                    <SocialIcon name={item.name} style={iconStyle} />
                </SocialLink>
            ))}
        </Social>
    );
};

export default FooterSocial;
