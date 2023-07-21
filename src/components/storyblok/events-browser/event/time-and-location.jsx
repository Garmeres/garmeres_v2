import React from 'react';
import styled from 'styled-components';
import {
	IoLocationOutline,
	IoTimeOutline,
	IoTimerOutline,
} from 'react-icons/io5';
import {
	getDurationString,
	getTimeStringFromDatetime,
	getTimeString,
} from '../helpers/string-formatter';

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const TimeLocationContainer = styled.div`
	display: flex;
	flex-direction: row;

	margin-left: 20px;
	&:first-child {
		margin-left: 0;
	}

	* {
		color: var(--bg-color-light);
	}
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
			<span>{getDurationString(duration)}</span>
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
			<span>{location}</span>
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
