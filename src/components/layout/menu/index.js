import React from "react";
import styled from "styled-components";
import MenuLogo from "./menu-logo";
import MenuItem from "./menu-item";
import MenuLanguageSelector from "./menu-language-selector";

const Header = styled.header`
    background-color: #222;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    justify-content: space-evenly;
    flex-grow: 1;
    max-width: 70%;
    a:hover {
        text-decoration: underline !important;
    }
`;

const Menu = ({ menuNode, source }) => {
    const menuItems = JSON.parse(menuNode.content).items;
    const storyblokLinks = menuNode.storyblokLinks;
    return (
        <Header>
            <MenuLogo menuNode={menuNode} />
            <MenuContainer>
                {menuItems
                    .map((item) =>
                        storyblokLinks.find((link) => link.uuid === item.page)
                    )
                    .map((link) => (
                        <MenuItem
                            key={link.id}
                            to={
                                menuNode.lang === "default"
                                    ? `/${link.slug}`
                                    : `/${menuNode.lang}/${
                                          link.alternates.find(
                                              (item) =>
                                                  item.lang === menuNode.lang
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
                    ))}
                <MenuLanguageSelector menuNode={menuNode} source={source} />
            </MenuContainer>
        </Header>
    );
};

export default Menu;
