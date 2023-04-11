import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";

const Select = styled.select``;

const Option = styled.option``;

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
    );
};

export default LanguageSelector;
