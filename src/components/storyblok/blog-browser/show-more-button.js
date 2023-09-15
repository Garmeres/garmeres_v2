import React from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const Loader = styled((props) => (
	<div {...props}>
		<ClipLoader />
	</div>
))`
	display: flex;
	flex-direction: column;
	justify-content: center;
	--loader-height: 120px;
	margin: 0 auto;
	height: var(--loader-height);
	min-height: var(--loader-height);
	max-height: var(--loader-height);
	box-sizing: border-box;
`;

const ShowMoreMutton = styled((props) =>
	props.options.isLoading ? (
		<Loader />
	) : (
		<button {...props}>{props.source.show_more_button_text}</button>
	)
)`
	--show-more-button-height: 120px;
	height: var(--show-more-button-height);
	background-color: var(--theme-color-dark-blue);
	color: var(--text-color-light);
	border: none;
	border-radius: 5px;
	font-size: var(--font-size-small);
	margin: 16pt auto;
	width: 90%;
	outline-color: var(--highlight-color-light);
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);

	@media (prefers-color-scheme: light) {
		color: var(--text-color-dark);
		background-color: var(--theme-color-light-green);
		outline-color: var(--highlight-color-dark);
	}
`;

export default ShowMoreMutton;
