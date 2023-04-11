import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100vw;
    border: 1px solid blue;
    min-height: 300px;
    background-color: #80277b;
    color: white;
    font-size: 14pt;
    padding: 50px 50px;
    box-sizing: border-box;
`;

const Footer = (props) => {
    return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
