import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

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
    font-size: 24pt;
    color: white;
`;

const MenuLogo = ({ menuNode }) => {
    return (
        <Link
            to="/"
            style={{
                height: "100%",
                width: "fit-content",
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
                marginRight: "50px",
            }}
        >
            <GatsbyImage
                image={getImage(getLogoImageNode(menuNode))}
                alt=""
                style={{
                    borderRadius: "5px",
                    width: "70px",
                    minWidth: "70px",
                    height: "70px",
                    minHeight: "70px",
                }}
            />
            <LogoText>{JSON.parse(menuNode.content).logo_text}</LogoText>
        </Link>
    );
};

export default MenuLogo;
