import React from "react";
import Menu from "./menu";
import styled from "styled-components";
import Footer from "./footer";

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
`;

const Layout = ({ menuNode, source, children }) => {
    return (
        <LayoutContainer>
            <Menu menuNode={menuNode} source={source} />
            <Main>{children}</Main>
            <Footer></Footer>
        </LayoutContainer>
    );
};

export default Layout;
