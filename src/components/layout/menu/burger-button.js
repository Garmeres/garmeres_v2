import React from "react";
import styled from "styled-components";
import variables from "./variables";

const Button = styled.button`
    flex-direction: column;
    justify-content: space-evenly;
    height: ${variables.menuButtonHeight};
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    background-color: ${variables.backgroundColor};
    margin: 0;
    padding: 0 5px;
    overflow: hidden;
    border: none;
    visibility: hidden;
    display: none;
    @media screen and (max-width: ${variables.screenWidthMedium}) {
        visibility: visible;
        display: flex;
    }
`;

const ButtonBar = styled.div`
    background-color: ${variables.menuFontColor};
    width: 100%;
    height: 3px;
`;

const BurgerButton = (props) => {
    return (
        <Button {...props}>
            <ButtonBar />
            <ButtonBar />
            <ButtonBar />
            <ButtonBar />
        </Button>
    );
};

export default BurgerButton;
