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
    color: var(--text-color-light);
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0;

    * {
        font-family: Quicksand !important;
    }
`;

const HeaderHorizontalContainer = styled.div`
    --header-height: 100px;
    height: var(--header-hight);
    min-height: var(--header-height);
    max-height: var(--header-height);
    background-color: var(--bg-color-dark);
    color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    z-index: 100;
    padding: 0 10%;
    @media screen and (max-width: ${variables.screenWidthLarge}) {
        padding: 0 30px;
        --header-height: 90px;
    }
    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        padding: 0 15px;
        --header-height: 80px;
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
