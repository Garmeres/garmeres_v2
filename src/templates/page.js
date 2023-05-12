import React from 'react';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { StoryblokComponent, useStoryblokState } from 'gatsby-source-storyblok';

const Page = (props) => {
	const { data } = props;
	const page = useStoryblokState(data.page);
	const menu = useStoryblokState(data.menu);
	const footer = useStoryblokState(data.footer);
	const homePage = useStoryblokState(data.homePage);
	const bgImageBlok = page.content.background_image;
	const bgGatsbyImage =
		bgImageBlok != null
			? getImage(
					page.imageFiles.find(
						(item) => item != null && item.url === bgImageBlok.filename
					)
			  )
			: null;
	return (
		<Layout
			homeSlug={`/${homePage.full_slug}`}
			menuNode={menu}
			footerNode={footer}
			source={page}
			backgroundImage={bgGatsbyImage}
			backgroundImageAlt={bgImageBlok != null ? bgImageBlok.alt : null}
			backgroundImageCopyright={
				bgImageBlok != null ? bgImageBlok.copyright : null
			}
			backgroundColor={page.content.background_color.color}
		>
			{page.content.body.map((bodyItem) => (
				<StoryblokComponent
					blok={bodyItem}
					key={bodyItem._uid}
					source={page}
					className='page'
				/>
			))}
		</Layout>
	);
};

export default Page;

export const Head = ({ data }) => (
	<Seo seoNode={useStoryblokState(data.page).seo} />
);

export const query = graphql`
	query ($id: String, $lang: String) {
		page: storyblokEntry(id: { eq: $id }) {
			id
			name
			lang
			slug
			uuid
			full_slug
			field_component
			default_full_slug
			content
			translated_slugs {
				lang
				name
				path
			}
			imageFiles {
				url
				childImageSharp {
					gatsbyImageData(quality: 70)
				}
			}
			seo {
				lang
				title
				meta {
					charSet
					content
					name
					property
				}
				links {
					href
					hrefLang
					rel
					target
				}
			}
		}
		menu: storyblokEntry(lang: { eq: $lang }, field_component: { eq: "menu" }) {
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
		footer: storyblokEntry(
			lang: { eq: $lang }
			field_component: { eq: "footer" }
		) {
			lang
			full_slug
			content
		}
		homePage: storyblokEntry(
			lang: { eq: $lang }
			field_component: { eq: "page" }
			slug: { eq: "home" }
		) {
			full_slug
		}
	}
`;
