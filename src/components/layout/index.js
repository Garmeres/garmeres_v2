import React from "react";
import Menu from "./menu";
import styled from "styled-components";

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Main = styled.main``;

const Layout = ({ menuNode, source, children }) => {
    return (
        <LayoutContainer>
            <Menu menuNode={menuNode} source={source} />
            <Main>{children}</Main>
        </LayoutContainer>
    );
};

export default Layout;
