import React from 'react';
import { render, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import RichTextImage from './rich-text-image';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import { storyblokEditable } from 'gatsby-source-storyblok';

const pageContentWidthStyling = `
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

const RichText = styled((props) => {
	return (
		<div
			{...props}
			{...storyblokEditable(props.blok)}
		>
			{render(props.blok.text, {
				nodeResolvers: {
					[NODE_IMAGE]: (children, p) => (
						<RichTextImage
							{...p}
							children={children}
							source={props.source}
						/>
					),
				},
			})}
		</div>
	);
})`
	&.footer {
		text-align: center;
		color: inherit;
		a {
			color: var(--theme-color-light-blue);
		}
	}

	&.blog-post {
		max-width: ${variables.richTextWidthDefault};
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		* {
			outline-color: var(--highlight-color-dark);
		}
	}

	&.not-found {
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
		* {
			outline-color: var(--highlight-color-dark);
		}

		${pageContentWidthStyling}
	}

	&.page {
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

		* {
			outline-color: var(--highlight-color-dark);
		}

		&:nth-child(2) {
			margin-top: 25vh;
			@media screen and (max-width: ${variables.screenWidthLarge}) {
				margin-top: 30vh;
			}
			@media screen and (max-width: ${variables.screenWidthMedium}) {
				margin-top: 40vh;
			}
		}

		${pageContentWidthStyling}
	}
`;

export default RichText;
