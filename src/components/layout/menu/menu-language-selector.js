import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { IoGlobeOutline } from "react-icons/io5";
import variables from "./variables";

const SelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid ${variables.menuFontColor};
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    :focus-within {
        outline: solid 2px ${variables.menuFontColor};
        outline-offset: -3px;
    }
    padding: 0 5px;
    max-width: 250px;
    :hover {
        background-color: #333;
    }
`;

const Select = styled.select`
    height: ${variables.menuButtonHeight};
    min-width: 150px;
    padding: 0 5px;
    background-color: inherit;
    color: white;
    border: 0;
    outline: 0;
    font-size: 12pt;
    flex-grow: 1;
    display: flex;
    judtify-content: center;
    align-items: middle;
`;

const Option = styled.option`
    display: flex;
    justify-content: center;
`;

const globeIconStyle = {
    height: "30px",
    width: "30px",
    margin: "auto",
    color: variables.menuFontColor,
};

const LanguageSelector = ({ source, menuNode }) => {
    const [lang, setLang] = useState(source.lang);
    const { languageSettings } = useStaticQuery(
        graphql`
            query LanguageSettings {
                languageSettings: allStoryblokEntry(
                    filter: { field_component: { eq: "settings" } }
                ) {
                    edges {
                        node {
                            lang
                            content
                        }
                    }
                }
            }
        `
    );

    const navigateToLang = (lang) => {
        navigate(
            lang === "default"
                ? `/${source.default_full_slug}`
                : `/${lang}/${
                      source.translated_slugs.find((item) => item.lang === lang)
                          .path
                  }`
        );
    };

    const setLanguage = (value) => {
        setLang(value);
        navigateToLang(value);
    };

    return (
        <SelectorContainer>
            <IoGlobeOutline style={globeIconStyle} />
            <Select
                name="languages"
                id="languages"
                value={lang}
                onChange={(e) => setLanguage(e.target.value)}
            >
                {languageSettings.edges.map(({ node }) => {
                    return (
                        <Option key={node.lang} value={node.lang}>
                            {JSON.parse(node.content).language_label}
                        </Option>
                    );
                })}
            </Select>
        </SelectorContainer>
    );
};

export default LanguageSelector;
