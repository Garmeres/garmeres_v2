import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import BlogPost from './blog-post';
import { fetchBlogPosts } from './helpers/fetchBlogPosts';
import { getHexWithAlpha } from '../../../../helpers/storyblok-helpers/color-helpers';
import ShowMoreMutton from './show-more-button';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { useTranslations } from '../../../hooks/use-translations';

const BlogPostsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	flex-grow: 1;
	box-sizing: border-box;
	padding: 0 5vw;
`;

const BlogBrowserTitle = styled.h2`
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
`;

const BlogBrowser = styled((props) => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getBlogPosts() {
			setIsLoading(true);
			const body = await fetchBlogPosts({
				language: props.source.lang,
				page: page,
				per_page: props.blok.page_capacity,
				starts_with:
					props.blok.source_path.story != null
						? props.blok.source_path.story.default_full_slug
						: null,
			});
			setBlogPosts((bp) => [...new Set(bp.concat(body.stories))]);
			setHasMore(page < Math.ceil(body.total / props.blok.page_capacity));
			setIsLoading(false);
		}
		getBlogPosts();
	}, [
		page,
		props.blok.page_capacity,
		props.source.lang,
		props.blok.source_path.story,
	]);

	const translations = useTranslations();
	const browserTitle = translations.news[props.source.lang];
	return (
		<div
			{...props}
			{...storyblokEditable(props.blok)}
			aria-label={browserTitle}
		>
			<BlogBrowserTitle>{browserTitle}</BlogBrowserTitle>
			<BlogPostsContainer>
				{blogPosts.map((blogPost) => (
					<BlogPost
						key={blogPost.uuid}
						node={blogPost}
						source={props.blok}
					/>
				))}
			</BlogPostsContainer>
			{hasMore ? (
				<ShowMoreMutton
					source={props.blok}
					options={{ isLoading: isLoading }}
					onClick={() => setPage(page + 1)}
				/>
			) : null}
		</div>
	);
})`
	background-color: ${(props) =>
		getHexWithAlpha(
			props.blok.background_color.color,
			props.blok.background_opacity
		)};
	color: ${(props) => props.blok.text_color.color};
	--page-content-width: ${variables.pageContentWidthDefault};
	width: var(--page-content-width);
	min-width: var(--page-content-width);
	max-width: var(--page-content-width);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	box-sizing: border-box;
	margin: 0 auto;
	min-height: 50vh;
	padding-top: 10vh;

	&:nth-child(2) {
		margin-top: 25vh;
		@media screen and (max-width: ${variables.screenWidthLarge}) {
			margin-top: 30vh;
		}
		@media screen and (max-width: ${variables.screenWidthMedium}) {
			margin-top: 40vh;
		}
	}

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
		flex-direction: column;
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--page-content-width: ${variables.pageContentWidthSmall};
	}
	@media screen and (max-width: ${variables.screenWidthExtraSmall}) {
		--page-content-width: ${variables.pageContentWidthExtraSmall};
	}
`;

export default BlogBrowser;
