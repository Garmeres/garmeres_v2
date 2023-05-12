import React from 'react';
import styled from 'styled-components';
import {
	getHexWithAlpha,
	getHexWithAlphaAndHighlight,
} from '../../../../helpers/storyblok-helpers/color-helpers';
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
	color: ${(props) => props.source.show_more_button_text_color.color};
	background-color: ${(props) =>
		getHexWithAlpha(
			props.source.show_more_button_background_color.color,
			props.source.show_more_button_background_opacity
		)};
	color: #333;
	border: none;
	border-radius: 5px;
	font-size: var(--font-size-small);
	margin: 0 auto;
	width: 100%;
	:hover {
		background-color: ${(props) =>
			getHexWithAlphaAndHighlight(
				props.source.show_more_button_background_color.color,
				props.source.show_more_button_background_opacity,
				5
			)};
	}
`;

export default ShowMoreMutton;
