import React from 'react';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { DynamicBlogPostComponent } from '../components/blog-post-components';
import BlogPostThumbnail from '../components/blog-post-components/blog-post-thumbnail';
import BlogPostContentContainer from '../components/blog-post-components/blog-post-content-container';
import BlogPostTitle from '../components/blog-post-components/blog-post-title';
import BlogPostDateAndAuthor from '../components/blog-post-components/blog-post-date-and-author';

const BlogPost = ({ data }) => {
	let i = 0;
	return (
		<Layout
			homeSlug={`/${data.homePage.full_slug}`}
			menuNode={data.menu}
			source={data.blogPost}
			backgroundColor='black'
		>
			<BlogPostContentContainer>
				<BlogPostThumbnail source={data.blogPost} />
				<BlogPostTitle source={data.blogPost} />
				<BlogPostDateAndAuthor source={data.blogPost} />
				{JSON.parse(data.blogPost.content).body.map((bodyItem) => (
					<DynamicBlogPostComponent
						key={i++}
						{...bodyItem}
						source={data.blogPost}
					/>
				))}
			</BlogPostContentContainer>
		</Layout>
	);
};

export default BlogPost;

export const Head = ({ data }) => <Seo seoNode={data.blogPost.seo} />;

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
			richTextImages: imageFiles {
				url
				childImageSharp {
					gatsbyImageData(width: 800)
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
		homePage: storyblokEntry(
			lang: { eq: $lang }
			field_component: { eq: "page" }
			slug: { eq: "home" }
		) {
			full_slug
		}
	}
`;
