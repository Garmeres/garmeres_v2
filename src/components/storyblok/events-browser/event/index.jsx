import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { eventObserver } from '../helpers/event-click';
import EventAccordionArrow from './accordion-arrow';
import DateBox from './date-box';
import TimeAndLocation from './time-and-location';

const Container = styled.div`
	:hover {
		cursor: pointer;
	}
`;

const Details = styled.details`
	box-sizing: border-box;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	height: 100%;
	padding: 15px;
`;

const Summary = styled.summary`
	height: 60px;
	max-height: 60px;
	display: flex;
	flex-direction: row;
	list-style: none;
`;

const EventSummaryText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
`;

const EventName = styled.h3`
	font-size: var(--font-size-medium-small);
	padding: 0;
	margin: 0;
	font-weight: 500;
`;

const Body = styled.p`
	padding: 0 20px;
`;

export default function Event(props) {
	const [isOpen, setIsOpen] = useState(false);
	const { onClick, name, description, location, duration, start, end } = props;
	const detailsRef = useRef();

	const observer = eventObserver(setIsOpen);

	useEffect(() => {
		if (detailsRef.current) {
			observer.observe(detailsRef.current, {
				attributes: true,
			});
			return () => {
				setIsOpen(false);
				observer.disconnect();
			};
		}
	}, []);

	return (
		<Container>
			<Details
				ref={detailsRef}
				onClick={(e) => {
					e.preventDefault();
					onClick(e);
				}}
			>
				<Summary>
					<DateBox datetime={start} />
					<EventSummaryText>
						<EventName>{name}</EventName>
						<TimeAndLocation
							location={location}
							start={start}
							end={end}
							duration={duration}
						/>
					</EventSummaryText>
					<EventAccordionArrow isOpen={isOpen} />
				</Summary>
				<Body>{description || 'No description'}</Body>
			</Details>
		</Container>
	);
}
