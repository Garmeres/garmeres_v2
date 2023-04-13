import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import variables from "../../styles/variables";

const BakgroundImage = styled((props) => (
    <GatsbyImage title="Background image" {...props} />
))`
    position: relative;
    top: 0;
    height: auto;
    width: 100%;
    filter: blur(1px);
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    max-height: 75vh;
    opacity: 1;
    border: none;
    background-size: auto 100%;
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        min-height: 40vh;
        max-height: 50vh;
    }
`;

const Background = styled.div`
    position: absolute;
    top: -1%;
    left: -1%;
    display: flex;
    flex-grow: 1;
    width: 102%;
    height: 102%;
    z-index: -1;
    background-color: ${(props) => props.backgroundColor};
    box-sizing: border-box;
`;

const LayoutBackground = ({
    backgroundColor,
    backgroundImage,
    backgroundImageAlt,
}) => {
    return (
        <Background
            backgroundColor={backgroundColor}
            hasbackgroundimage={backgroundImage != null}
        >
            {backgroundImage != null ? (
                <BakgroundImage
                    image={backgroundImage}
                    alt={backgroundImageAlt}
                />
            ) : null}
        </Background>
    );
};

export default LayoutBackground;
