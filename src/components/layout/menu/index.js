import React from "react";
import styled from "styled-components";
import MenuLogo from "./menu-logo";
import MenuLanguageSelector from "./menu-language-selector";
import BurgerButton from "./burger-button";
import { useState } from "react";
import variables from "../../../styles/variables";
import { DesktopNav, MobileNav } from "./menu-nav";
import { DesktopNavItem, MobileNavItem } from "./menu-nav-item";

const Header = styled.header`
    --header-height: 100px;
    --header-content-width: 95%;
    color: var(--text-color-light);
    background: var(--bg-color-dark);
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    width: 100%;
    margin: 0;
    padding: 0;
    * {
        font-family: Quicksand !important;
    }
`;

const HeaderHorizontalContainer = styled.div`
    width: var(--header-content-width);
    min-width: var(--header-content-width);
    max-width: var(--header-content-width);
    height: var(--header-hight);
    min-height: var(--header-height);
    max-height: var(--header-height);
    background-color: var(inherit);
    color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    z-index: 100;
    margin: 0 auto;
    @media screen and (max-width: ${variables.screenWidthLarge}) {
    }
    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
    }
`;

const getMenuAriaLabel = (isOpen) =>
    isOpen === true ? "Hide navigation menu" : "Show navigation menu";

const getMenuItems = (menuNode) =>
    JSON.parse(menuNode.content)
        .items.map((item) =>
            menuNode.storyblokLinks.find((link) => link.uuid === item.page)
        )
        .map((link) => ({
            to:
                menuNode.lang === "default"
                    ? `/${link.slug}`
                    : `/${menuNode.lang}/${
                          link.alternates.find(
                              (item) => item.lang === menuNode.lang
                          ).path
                      }`,
            children:
                menuNode.lang === "default"
                    ? link.name
                    : link.alternates.find(
                          (item) => item.lang === menuNode.lang
                      ).name,
        }));

const Menu = ({ menuNode, source }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const menuItems = getMenuItems(menuNode);
    let i = 0;
    return (
        <Header>
            <HeaderHorizontalContainer>
                <MenuLogo menuNode={menuNode} />
                <DesktopNav>
                    {menuItems.map((menuItemProps) => (
                        <DesktopNavItem key={i++} {...menuItemProps} />
                    ))}
                    <MenuLanguageSelector source={source} />
                </DesktopNav>
                <BurgerButton
                    aria-label={getMenuAriaLabel(menuIsOpen)}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                />
            </HeaderHorizontalContainer>
            <MobileNav isVisible={menuIsOpen}>
                {menuItems.map((menuItemProps) => (
                    <MobileNavItem key={i++} {...menuItemProps} />
                ))}
                <MenuLanguageSelector
                    className="language-selector-mobile"
                    source={source}
                />
            </MobileNav>
        </Header>
    );
};

export default Menu;
