import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EventsLoader from './events-loader';
import Event from './event';
import { onEventClick } from './helpers/event-click';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const EventsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	min-height: calc(
		2px + calc(92px * ${(props) => Math.max(props.$maxeventsinpage, 1)})
	);
	border: 1px solid #eee;
	border-radius: 5px;
`;

const EmptyText = styled.span`
	margin: auto;
`;

export default function EventsPageDisplay({ isLoading, page }) {
	const [maxEventsInPage, setMaxEventsInPage] = useState(0);
	const events = page != null && page['events'] != null ? page['events'] : [];
	let i = 0;

	useEffect(() => {
		const eventsInPage =
			page != null && page['events'] != null ? page['events'] : [];
		if (eventsInPage.length > maxEventsInPage)
			setMaxEventsInPage(eventsInPage.length);
	}, [page, maxEventsInPage]);

	return (
		<Container>
			<EventsContainer
				key='events'
				$maxeventsinpage={maxEventsInPage}
			>
				{isLoading ? (
					<EventsLoader />
				) : events.length > 0 ? (
					events.map((event) => (
						<Event
							key={i++}
							id={i}
							onClick={onEventClick}
							{...event}
						/>
					))
				) : (
					<EmptyText>No upcoming events</EmptyText>
				)}
			</EventsContainer>
		</Container>
	);
}
