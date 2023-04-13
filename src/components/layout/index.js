import React from "react";
import Menu from "./menu";
import styled from "styled-components";
import Footer from "./footer";
import LayoutBackground from "./layout-background";

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;
const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: auto;
    width: 100%;
    position: relative;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
`;

const Layout = ({
    menuNode,
    source,
    children,
    backgroundColor,
    backgroundImage,
    backgroundImageAlt,
    backgroundImageCopyright,
}) => {
    return (
        <LayoutContainer>
            <Menu menuNode={menuNode} source={source} />
            <Main>
                <LayoutBackground
                    backgroundColor={backgroundColor}
                    backgroundImage={backgroundImage}
                    backgroundImageAlt={backgroundImageAlt}
                    backgroundImageCopyright={backgroundImageCopyright}
                />
                {children}
            </Main>
            <Footer
                lang={menuNode.lang}
                backgroundImageCopyright={backgroundImageCopyright}
            ></Footer>
        </LayoutContainer>
    );
};

export default Layout;
