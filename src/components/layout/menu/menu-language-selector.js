import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { IoGlobeOutline } from 'react-icons/io5';
import variables from '../../../styles/variables';
import { useTranslations } from '../../../hooks/use-translations';

const SelectorContainer = styled.div`
    --language-select-height: 45px;
    --language-select-width: 100px;
    --language-select-max-width: 250px;
    --globe-icon-size: 30px;

    max-width: var(--language-select-max-width);
    border: 1px solid var(--text-color-light);
    background-color(--bg-color-dark);
    color: var(--text-color-light);

    padding: 0 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    &.language-selector-mobile {
        margin: 15px auto;
        :hover {
            background-color: var(--bg-color-light);
        }
    }

    :hover {
        background-color: var(--bg-color-medium);
    }

    :focus-within {
        outline: solid 2px var(--highlight-color-light);
        outline-offset: -3px;
    }
`;

const Select = styled.select`
	font-size: var(--font-size-medium-small);
	height: var(--language-select-height);
	min-width: var(--language-select-width);
	padding: 0 5px;
	color: inherit;
	background-color: inherit;
	border: 0;
	outline: 0;
	flex-grow: 1;
	display: flex;
	judtify-content: center;
	align-items: middle;

	@media screen and (max-width: ${variables.screenWidthMediumLarge}) {
		font-size: var(--font-size-small);
	}
`;

const Option = styled.option`
	display: flex;
	justify-content: center;
	font-size: var(--font-size-medium-small);
	@media screen and (max-width: ${variables.screenWidthMediumLarge}) {
		font-size: var(--font-size-small);
	}
`;

const GlobeIcon = styled((props) => (
	<IoGlobeOutline
		{...props}
		aria-hidden={true}
	/>
))`
	color: inherit;
	height: var(--globe-icon-size);
	width: var(--globe-icon-size);
	background-color: inherit;
	margin: auto;
`;

const LanguageSelector = (props) => {
	const [lang, setLang] = useState(props.source.lang);
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
			lang === 'default'
				? `/${props.source.default_full_slug}`
				: `/${lang}/${
						props.source.translated_slugs.find((item) => item.lang === lang)
							.path
				  }`
		);
	};

	const translations = useTranslations();

	return (
		<SelectorContainer
			className={props.className}
			aria-label={Object.keys(translations.language)
				.sort((a, b) =>
					a === b ? 0 : b === 'default' ? -1 : a === 'sme' ? -1 : 1
				)
				.map((l) => translations.language[l])
				.join(' / ')}
		>
			<GlobeIcon />
			<Select
				name='languages'
				id='languages'
				value={lang}
				onChange={(e) => {
					setLang(e.target.value);
					navigateToLang(e.target.value);
				}}
			>
				{languageSettings.edges.map(({ node }) => {
					return (
						<Option
							key={node.lang}
							value={node.lang}
						>
							{JSON.parse(node.content).language_label}
						</Option>
					);
				})}
			</Select>
		</SelectorContainer>
	);
};

export default LanguageSelector;
