import React from 'react';
import { useStoryblokState } from 'gatsby-source-storyblok';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogPostThumbnail from '../components/blog-post-components/blog-post-thumbnail';
import BlogPostContentContainer from '../components/blog-post-components/blog-post-content-container';
import BlogPostTitle from '../components/blog-post-components/blog-post-title';
import BlogPostDateAndAuthor from '../components/blog-post-components/blog-post-date-and-author';
import { StoryblokComponent } from 'gatsby-source-storyblok';

const BlogPost = ({ data }) => {
	const blogPost = useStoryblokState(data.blogPost);
	const menu = useStoryblokState(data.menu);
	const footer = useStoryblokState(data.footer);
	const homePage = useStoryblokState(data.homePage);
	return (
		<Layout
			homeSlug={`/${homePage.full_slug}`}
			menuNode={menu}
			footerNode={footer}
			source={blogPost}
			backgroundColor='black'
		>
			<BlogPostContentContainer>
				<BlogPostThumbnail source={blogPost} />
				<BlogPostTitle source={blogPost} />
				<BlogPostDateAndAuthor source={blogPost} />
				{blogPost.content.body.map((bodyItem) => (
					<StoryblokComponent
						blok={bodyItem}
						key={bodyItem._uid}
						source={blogPost}
						className='blog-post'
					/>
				))}
			</BlogPostContentContainer>
		</Layout>
	);
};

export default BlogPost;

export const Head = ({ data }) => (
	<Seo seoNode={useStoryblokState(data.blogPost).seo} />
);

export const query = graphql`
	query ($id: String, $lang: String) {
		blogPost: storyblokEntry(id: { eq: $id }) {
			id
			name
			lang
			slug
			uuid
			full_slug
			field_component
			default_full_slug
			first_published_at
			content
			translated_slugs {
				lang
				name
				path
			}
			imageFiles {
				url
				childImageSharp {
					gatsbyImageData(width: 800, quality: 70)
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
					gatsbyImageData(quality: 90)
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
