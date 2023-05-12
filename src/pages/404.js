import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { StoryblokComponent, useStoryblokState } from 'gatsby-source-storyblok';

const NotFoundPage = (props) => {
	const langs = props.data.notFoundNodes.edges.map(({ node }) => node.lang);
	const lang =
		props.location.pathname
			.split('/')
			.filter((i) => i !== 'default' && langs.includes(i))[0] || 'default';

	const homePage = useStoryblokState(
		props.data.homePages.edges.find(({ node }) => node.lang === lang).node
	);
	const menuNode = useStoryblokState(
		props.data.menuNodes.edges.find(({ node }) => node.lang === lang).node
	);
	const footerNode = useStoryblokState(
		props.data.footerNodes.edges.find(({ node }) => node.lang === lang).node
	);
	const notFoundNode = useStoryblokState(
		props.data.notFoundNodes.edges.find(({ node }) => node.lang === lang).node
	);

	return (
		<Layout
			homeSlug={`/${homePage.full_slug}`}
			menuNode={menuNode}
			footerNode={footerNode}
			source={notFoundNode}
			backgroundColor='black'
		>
			<StoryblokComponent
				blok={{
					component: 'rich_text',
					text: {
						...notFoundNode.content.body,
					},
				}}
				key={notFoundNode._uid}
				source={notFoundNode}
				className='not-found'
			/>
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
		footerNodes: allStoryblokEntry(
			filter: { field_component: { eq: "footer" } }
		) {
			edges {
				node {
					lang
					full_slug
					content
				}
			}
		}
	}
`;
