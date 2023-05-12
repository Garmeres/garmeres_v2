import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import variables from '../../../styles/variables';

const NavItem = styled((props) => <Link {...props} />)`
	color: var(--text-color-light);
	text-decoration: underline solid
		${(props) => (props.selected ? 'var(--text-color-light)' : 'transparent')};
	font-size: var(--font-size-medium-small);

	@keyframes bg-fade-in {
		from {
			background-color: var(--bg-color-medium);
			text-decoration: underline solid transparent;
		}
		to {
			background-color: var(--bg-color-light);
			text-decoration: underline solid var(--text-color-light);
		}
	}
	@keyframes bg-fade-out {
		from {
			background-color: var(--bg-color-light);
			text-decoration: underline solid var(--text-color-light);
		}
		to {
			background-color: var(--bg-color-medium);
			text-decoration: underline solid transparent;
		}
	}

	:hover {
		text-decoration: underline solid var(--text-color-light);
		animation-name: td-fade-in;
		animation-duration: 0.2s;
	}
`;

export const DesktopNavItem = styled((props) => <NavItem {...props} />)`
	margin: 0 25px 0 20px;
	@media screen and (max-width: ${variables.screenWidthMediumLarge}) {
		font-size: var(--font-size-small);
		margin: 0 20px 0 5px;
	}
`;

export const MobileNavItem = styled((props) => <NavItem {...props} />)`
	display: flex;
	justify-content: center;
	padding: 25px 0;
	border-top: 1px solid #555;
	margin: 0 !important;
	animation-duration: 0.3s;
	animation-name: bg-fade-out;
	:hover {
		background-color: var(--bg-color-light);
		animation-name: bg-fade-in;
		animation-duration: 0.3s;
	}
	:nth-last-child(2) {
		border-bottom: 1px solid var(--bg-color-extra-light) !important;
	}
`;
