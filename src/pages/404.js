import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import RichText from '../components/storyblok/rich-text';
import styled from 'styled-components';
import variables from '../styles/variables';
import { useStoryblokState } from 'gatsby-source-storyblok';

const NotFoundRichText = styled((props) => <RichText {...props} />)`
	--page-content-width: ${variables.pageContentWidthDefault};
	width: var(--page-content-width);
	min-width: var(--page-content-width);
	max-width: var(--page-content-width);
	background-color: var(--bg-color-article);
	min-height: 50vh;
	position: relative;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	flex-grow: 1;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 10vh 5vw;

	@media screen and (max-width: ${variables.screenWidthExtraLarge}) {
		--page-content-width: ${variables.pageContentWidthExtraLarge};
	}
	@media screen and (max-width: ${variables.screenWidthLarge}) {
		--page-content-width: ${variables.pageContentWidthLarge};
	}
	@media screen and (max-width: ${variables.screenWidthMediumLarge}) {
		--page-content-width: ${variables.pageContentWidthMediumLarge};
	}
	@media screen and (max-width: ${variables.screenWidthMedium}) {
		--page-content-width: ${variables.pageContentWidthMedium};
	}
	@media screen and (max-width: ${variables.screenWidthMediumSmall}) {
		--page-content-width: ${variables.pageContentWidthMediumSmall};
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--page-content-width: ${variables.pageContentWidthSmall};
	}
	@media screen and (max-width: ${variables.screenWidthExtraSmall}) {
		--page-content-width: ${variables.pageContentWidthExtraSmall};
	}
`;

const NotFoundPage = (props) => {
	const langs = props.data.notFoundNodes.edges.map(({ node }) => node.lang);
	const lang =
		props.location.pathname
			.split('/')
			.filter((i) => i !== 'default' && langs.includes(i))[0] || 'default';
	let homePage = props.data.homePages.edges.find(
		({ node }) => node.lang === lang
	).node;
	homePage = useStoryblokState(homePage);
	let menuNode = props.data.menuNodes.edges.find(
		({ node }) => node.lang === lang
	).node;
	menuNode = useStoryblokState(menuNode);
	let notFoundNode = props.data.notFoundNodes.edges.find(
		({ node }) => node.lang === lang
	).node;
	notFoundNode = useStoryblokState(notFoundNode);
	return (
		<Layout
			homeSlug={`/${homePage.full_slug}`}
			menuNode={menuNode}
			source={notFoundNode}
			backgroundColor='black'
		>
			<NotFoundRichText document={notFoundNode.content.body} />
		</Layout>
	);
};

export default NotFoundPage;

export const Head = (props) => {
	const langs = props.data.notFoundNodes.edges.map(({ node }) => node.lang);
	const lang =
		props.location.pathname
			.split('/')
			.filter((i) => i !== 'default' && langs.includes(i))[0] || 'default';
	let notFoundNode = props.data.notFoundNodes.edges.find(
		({ node }) => node.lang === lang
	).node;
	notFoundNode = useStoryblokState(notFoundNode);
	return (
		<>
			<title>
				{`${
					lang === 'default'
						? notFoundNode.name
						: notFoundNode.translated_slugs.find((i) => i.lang === lang).name
				} | Garmeres`}
			</title>
			<html lang={lang} />
		</>
	);
};

export const query = graphql`
	query {
		homePages: allStoryblokEntry(filter: { slug: { eq: "home" } }) {
			edges {
				node {
					lang
					full_slug
				}
			}
		}
		notFoundNodes: allStoryblokEntry(
			filter: { field_component: { eq: "404-not-found" } }
		) {
			edges {
				node {
					lang
					full_slug
					default_full_slug
					content
					name
					translated_slugs {
						lang
						name
						path
					}
				}
			}
		}
		menuNodes: allStoryblokEntry(filter: { field_component: { eq: "menu" } }) {
			edges {
				node {
					lang
					content
					imageFiles {
						url
						childImageSharp {
							gatsbyImageData(width: 100, quality: 90)
						}
					}
					storyblokLinks {
						id
						uuid
						real_path
						name
						slug
						alternates {
							lang
							name
							path
						}
					}
				}
			}
		}
	}
`;
