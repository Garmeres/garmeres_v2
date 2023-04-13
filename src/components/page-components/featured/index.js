import React from "react";
import styled from "styled-components";
import variables from "../../../styles/variables";
import { DynamicFeaturedComponent } from "./featured-components";

const PageFeatured = styled((props) => {
    let i = 0;
    return props.body.length > 0 ? (
        <div {...props}>
            {props.body.map((featuredItem) => (
                <DynamicFeaturedComponent
                    key={i++}
                    featuredComponent={featuredItem}
                />
            ))}
        </div>
    ) : null;
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 0 auto;
    min-height: 35vh;
    text-align: center;
    padding: 0 20%;
    box-sizing: border-box;

    &:nth-child(2) {
        margin: 15vh auto;
        box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.8);
        @media screen and (max-width: ${variables.screenWidthMedium}) {
            margin: 7.5vh auto;
        }
    }

    h1 {
        font-size: 42pt;
        font-family: "Quicksand" !important;
        font-weight: 600;
    }
    p {
        font-size: 14pt;
    }
`;

export default PageFeatured;
