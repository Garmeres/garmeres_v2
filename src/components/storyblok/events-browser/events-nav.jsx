import React from 'react';
import styled from 'styled-components';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	max-width: 300px;
	height: 60px;
	margin: 10px auto;
`;

const PageNumberView = styled.div`
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	justify-content: center;
	gap: 1pt;
	span {
		font-size: var(--font-size-medium-small);
		margin: auto 0;
	}
`;

const ArrowButton = styled.button`
	--arrow-button-size: 60px;
	border-radius: var(--arrow-button-size);
	width: var(--arrow-button-size);
	height: var(--arrow-button-size);
	border: none;
	background-color: #eee;
	padding: 15px;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);

	&:not([disabled]) {
		&:hover {
			background-color: #f5f5f5;
			* {
				color: #555;
			}
		}

		* {
			color: #333;
		}
	}
`;

const iconStyle = {
	width: '100%',
	height: '100%',
	background: 'none',
};

const RightArrow = (props) => {
	return (
		<ArrowButton
			disabled={props.disabled}
			onClick={props.onClick}
			aria-label={props['aria-label']}
		>
			<IoChevronForward style={iconStyle} />
		</ArrowButton>
	);
};

const LeftArrow = (props) => {
	return (
		<ArrowButton
			disabled={props.disabled}
			onClick={props.onClick}
			aria-label={props['aria-label']}
		>
			<IoChevronBack style={iconStyle} />
		</ArrowButton>
	);
};

export default function EventsNav({
	currentPageNumber,
	totalPages,
	onNavigate,
	disabled,
	translations,
	lang,
}) {
	return totalPages > 1 ? (
		<Container>
			<LeftArrow
				aria-label={translations.prev_page[lang] || 'Previous page'}
				disabled={disabled || currentPageNumber <= 0}
				onClick={() => {
					if (currentPageNumber > 0) onNavigate(currentPageNumber - 1);
				}}
			/>
			<PageNumberView
				aria-label={`${translations.page[lang] || 'Page'}: ${
					currentPageNumber + 1
				}/${totalPages}`}
			>
				<span aria-hidden='true'>
					{currentPageNumber + 1}/{totalPages}
				</span>
			</PageNumberView>
			<RightArrow
				aria-label={translations.next_page[lang] || 'Next page'}
				disabled={disabled || currentPageNumber + 1 >= totalPages}
				onClick={() => {
					if (currentPageNumber + 1 < totalPages)
						onNavigate(currentPageNumber + 1);
				}}
			/>
		</Container>
	) : null;
}
