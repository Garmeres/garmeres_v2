import React from 'react';
import styled from 'styled-components';
import {
	IoLocationOutline,
	IoTimeOutline,
	IoTimerOutline,
} from 'react-icons/io5';
import { getDurationString, getTimeString } from '../helpers/string-formatter';
import variables from '../../../../styles/variables';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	white-space: wrap;

	@media screen and (max-width: ${variables.screenWidthSmall}) {
		flex-direction: column;
	}
`;

const TimeLocationContainer = styled.div`
	display: inline-flex;
	flex-direction: row;

	margin-right: 20px;
	&:last-child {
		margin-right: 0;
	}

	@media screen and (max-width: ${variables.screenWidthSmall}) {
		margin-right: 10px;
		&:last-child {
			margin-right: 0;
		}
	}

	* {
		color: var(--bg-color-light);
	}
	max-height: 1.5em;
	white-space: nowrap;
`;

const Span = styled.span`
	display: inline-block;
	font-size: var(--font-size-extra-small);
	overflow: hidden;
	white-space: nowrap;
`;

const TimeString = ({ start, end, duration }) => {
	const time = getTimeString(start, end, duration);
	return time != null ? (
		<TimeLocationContainer>
			<IoTimeOutline
				size={18}
				style={{
					margin: 'auto 5px auto 0',
				}}
			/>
			<span>{time}</span>
		</TimeLocationContainer>
	) : null;
};

const DurationString = ({ duration }) => {
	const durationString = getDurationString(duration);
	return durationString != null ? (
		<TimeLocationContainer>
			<IoTimerOutline
				size={18}
				style={{
					margin: 'auto 5px auto 0',
				}}
			/>
			<Span>{getDurationString(duration)}</Span>
		</TimeLocationContainer>
	) : null;
};

const LocationString = ({ location }) =>
	location != null && location !== '' ? (
		<TimeLocationContainer>
			<IoLocationOutline
				size={20}
				style={{
					margin: 'auto 5px auto 0',
				}}
			/>
			<Span>{location}</Span>
		</TimeLocationContainer>
	) : null;

export default function TimeAndLocation({ start, end, duration, location }) {
	return (
		<Container>
			<TimeString
				start={start}
				end={end}
				duration={duration}
			/>
			<DurationString duration={duration} />
			<LocationString location={location} />
		</Container>
	);
}
