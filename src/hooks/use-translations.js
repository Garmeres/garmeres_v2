import { useStaticQuery, graphql } from 'gatsby';

export const useTranslations = () => {
	const { translations } = useStaticQuery(
		graphql`
			query Translations {
				translations: allStoryblokEntry(
					filter: { field_component: { eq: "translations" } }
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

	const t_keys = Object.keys(
		JSON.parse(
			translations.edges.find(({ node }) => node.lang === 'default').node
				.content
		)
	);

	const t_langs = translations.edges.map(({ node }) => node.lang);

	let t_contents = {};

	t_langs.forEach((lang) => {
		t_contents[lang] = JSON.parse(
			translations.edges.find(({ node }) => node.lang === lang).node.content
		);
	});

	let t_result = {};

	t_keys.forEach((key) => {
		t_result[key] = {};
		t_langs.forEach((lang) => {
			t_result[key][lang] = t_contents[lang][key];
		});
	});

	return t_result;
};
