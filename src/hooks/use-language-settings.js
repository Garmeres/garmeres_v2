import { useStaticQuery, graphql } from 'gatsby';

export const useLanguageSettings = () => {
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

	let obj = {};

	languageSettings.edges.forEach(({ node }) => {
		obj[node.lang] = JSON.parse(node.content);
	});

	return obj;
};
