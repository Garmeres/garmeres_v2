import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import variables from "../../../styles/variables";

const NavItem = styled((props) => <Link {...props} />)`
    color: inherit;
    text-decoration: none;
    font-size: var(--paragraph-font-size-medium);
    :hover {
        text-decoration: underline !important;
    }
`;

export const DesktopNavItem = styled((props) => <NavItem {...props} />)`
    margin: 0 40px 0 10px;
    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        font-size: var(--paragraph-font-size-medium-small);
        margin: 0 20px 0 5px;
    }
`;

export const MobileNavItem = styled((props) => <NavItem {...props} />)`
    display: flex;
    justify-content: center;
    padding: 25px 0;
    border-top: 1px solid #555;
    margin: 0 !important;
    :hover {
        background-color: var(--bg-color-light);
    }
    :nth-last-child(2) {
        border-bottom: 1px solid var(--bg-color-extra-light) !important;
    }
`;
