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

const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export default function DateBox({ datetime, color }) {
	const date = new Date(datetime);
	return (
		<Container>
			<Border color={color} />
			<DateContainer>
				<span>{date.getDate()}</span>
				<span>{monthNames[date.getMonth()]}</span>
			</DateContainer>
		</Container>
	);
}
