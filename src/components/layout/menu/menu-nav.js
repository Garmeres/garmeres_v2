import React from "react";
import styled from "styled-components";
import variables from "../../../styles/variables";

const MenuNav = styled.div`
    color: inherit;
    background-color: inherit;
    display: none;
`;

export const DesktopNav = styled((props) => <MenuNav {...props} />)`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    justify-content: right;
    flex-grow: 1;
    box-sizing: border-box;
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        visibility: hidden;
        display: none;
    }
`;

export const MobileNav = styled((props) => <MenuNav {...props} />)`
    background-color: var(--bg-color-medium);
    flex-direction: column;
    justify-content: center;
    width: 100%;
    visibility: hidden;
    display: none;
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
        display: ${(props) => (props.isVisible ? "flex" : "none")};
        height: auto;
        overflow-y: hidden;
        position: relative;
    }
`;
