import React from "react";
import styled from "styled-components";
import MenuLogo from "./menu-logo";
import MenuItem from "./menu-item";
import MenuLanguageSelector from "./menu-language-selector";
import BurgerButton from "./burger-button";
import { useState } from "react";
import variables from "./variables";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100vw;
    margin: 0;
`;

const HeaderHorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    min-height: 100%;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
    min-height: 100px;
    max-height: 100px;
    padding: 0 10%;
    box-sizing: border-box;
    background-color: ${variables.backgroundColor};
    z-index: 100;
    @media screen and (max-width: ${variables.screenWidthLarge}) {
        padding: 0 50px;
    }
    @media screen and (max-width: ${variables.screenWidthMediumLarge}) {
        padding: 0 30px;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    justify-content: right;
    flex-grow: 1;
    box-sizing: border-box;
    a:hover {
        text-decoration: underline !important;
    }
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        visibility: hidden;
        display: none;
    }
`;

const MobileMenuContainer = styled.div.attrs((props) => ({
    className: props.className,
}))`
    visibility: hidden;
    display: none
    width: 100%;
    background-color: ${variables.menuSecondaryBackgroundColor};
    flex-direction: column;
    justify-content: center;
    height: 0;
    a {
        display: flex;
        padding: 25px 0;
        justify-content: center;
        font-size: 18pt;
        border-top: 1px solid #555;
        margin: 0 !important;
        :hover {
            text-decoration: underline !important;
            background-color: #444;
        }
        :nth-last-child(2) {
            border-bottom: 1px solid #555 !important;
        }
    }
    div {
        margin: 15px auto;
        :hover {
            background-color: #444;
        }
    }
    
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
        display: ${(props) => (props.isVisible ? "flex" : "none")};
        height: auto;
        overflow-y: hidden;
        position: relative;
    }
`;

const getMenuAriaLabel = (isOpen) =>
    isOpen === true ? "Hide navigation menu" : "Show navigation menu";

const Menu = ({ menuNode, source }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const menuItems = JSON.parse(menuNode.content).items;
    const storyblokLinks = menuNode.storyblokLinks;
    let i = 0;

    const MenuItems = menuItems
        .map((item) => storyblokLinks.find((link) => link.uuid === item.page))
        .map((link) => (
            <MenuItem
                key={i++}
                to={
                    menuNode.lang === "default"
                        ? `/${link.slug}`
                        : `/${menuNode.lang}/${
                              link.alternates.find(
                                  (item) => item.lang === menuNode.lang
                              ).path
                          }`
                }
            >
                {menuNode.lang === "default"
                    ? link.name
                    : link.alternates.find(
                          (item) => item.lang === menuNode.lang
                      ).name}
            </MenuItem>
        ))
        .concat([
            <MenuLanguageSelector
                key={i}
                menuNode={menuNode}
                source={source}
            />,
        ]);
    return (
        <Header>
            <HeaderHorizontalContainer>
                <MenuLogo menuNode={menuNode} />
                <MenuContainer>{MenuItems}</MenuContainer>
                <BurgerButton
                    aria-label={getMenuAriaLabel(menuIsOpen)}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                />
            </HeaderHorizontalContainer>
            <MobileMenuContainer
                isVisible={menuIsOpen}
                className={menuIsOpen ? "visible" : "hidden"}
            >
                {MenuItems}
            </MobileMenuContainer>
        </Header>
    );
};

export default Menu;
