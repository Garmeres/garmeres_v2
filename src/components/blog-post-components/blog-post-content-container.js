import styled from 'styled-components';
import variables from '../../styles/variables';

const BlogPostContentContainer = styled.div`
	margin: 0 auto;
	--page-content-width: ${variables.pageContentWidthDefault};
	width: var(--page-content-width);
	min-width: var(--page-content-width);
	max-width: var(--page-content-width);
	background-color: var(--bg-color-article);
	min-height: 50vh;
	padding: 5vh 5vw;
	flex-grow: 1;
	box-sizing: border-box;
	overflow-x: hidden;
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 4px;

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

export default BlogPostContentContainer;
