import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SocialIcon from './footer-social-icon';

const Social = styled.div`
	--social-icon-size: 30px;
	color: var(--text-color-light);
	margin-bottom: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const SocialLink = styled.a`
	width: var(--social-icon-size);
	height: var(--social-icon-size);
	color: inherit;
	cursor: pointer;
	margin: 0 20px;
`;

const FooterSocial = ({ lang }) => {
	const data = useStaticQuery(graphql`
		query {
			socials: allStoryblokEntry(
				filter: { field_component: { eq: "social" } }
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
	`);
	const socialNode = data.socials.edges.find(
		({ node }) => node.lang === lang
	).node;

	const content = JSON.parse(socialNode.content);
	return (
		<Social>
			{content.items.map((item) => (
				<SocialLink
					key={item.name}
					href={item.url.url}
					{...item.url}
				>
					<SocialIcon name={item.name} />
				</SocialLink>
			))}
		</Social>
	);
};

export default FooterSocial;
