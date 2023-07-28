import React from 'react';
import styled from 'styled-components';
import variables from '../../../../styles/variables';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 60px;
	padding-right: 2px;
	margin-right: 10px;

	@media screen and (max-width: ${variables.screenWidthSmall}) {
		height: 75px;
	}
`;

const Border = styled.div`
	width: 2px;
	background-color: ${(props) =>
		props.color || 'var(--theme-color-light-pink)'};
	border-radius: 2px;
`;

const DateContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60px;

	* {
		text-align: center;
		font-size: var(--font-size-medium-small);
		font-weight: 500;
	}
`;

const monthIndices = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december',
];

export default function DateBox({ datetime, color, translations, lang }) {
	const date = new Date(datetime);
	const dateString = date.getDate();
	const monthString = translations[monthIndices[date.getMonth()]][lang];
	return (
		<Container aria-label={`${dateString}. ${monthString}`}>
			<Border
				color={color}
				aria-hidden='true'
			/>
			<DateContainer aria-hidden='true'>
				<span>{dateString}</span>
				<span>{monthString.slice(0, 3)}</span>
			</DateContainer>
		</Container>
	);
}
