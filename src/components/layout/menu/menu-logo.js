import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import variables from "./variables";

const getLogoImageNode = (menuNode) =>
    menuNode.imageFiles.find(
        (file) => file.url === JSON.parse(menuNode.content).logo.filename
    );

const LogoText = styled.span`
    display: flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    font-size: 22pt;
    color: ${variables.menuFontColor};

    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        font-size: 22pt;
    }
`;

const LogoLink = styled((props) => <Link to="/" {...props} />)`
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: row;
    text-decoration: none;
`;

const LogoImage = styled((props) => <GatsbyImage {...props} />)`
    border-radius: 5px;
    width: ${variables.menuLogoSize};
    min-width: ${variables.menuLogoSize};
    height: ${variables.menuLogoSize};
    min-height: ${variables.menuLogoSize};

    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        width: ${variables.menuLogoSizeSmall};
        min-width: ${variables.menuLogoSizeSmall};
        height: ${variables.menuLogoSizeSmall};
        min-height: ${variables.menuLogoSizeSmall};
    }
`;

const MenuLogo = ({ menuNode }) => {
    return (
        <LogoLink>
            <LogoImage image={getImage(getLogoImageNode(menuNode))} alt="" />
            <LogoText>{JSON.parse(menuNode.content).logo_text}</LogoText>
        </LogoLink>
    );
};

export default MenuLogo;
