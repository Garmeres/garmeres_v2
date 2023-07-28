import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { eventObserver } from '../helpers/event-click';
import EventAccordionArrow from './accordion-arrow';
import DateBox from './date-box';
import TimeAndLocation from './time-and-location';
import variables from '../../../../styles/variables';

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
	display: flex;
	flex-direction: row;
	list-style: none;
	box-sizing: border-box;

	@media screen and (max-width: ${variables.screenWidthSmall}) {
		height: 75px;
	}

	overflow: hidden;
	:hover {
		cursor: pointer;
	}
`;

const EventSummaryText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;
`;

const EventName = styled.h3`
	font-size: var(--font-size-medium-small);
	padding: 0;
	margin: 0;
	font-weight: 500;
	white-space: nowrap;

	@media screen and (max-width: ${variables.screenWidthSmall}) {
		font-size: var(--font-size-small);
	}
`;

const Body = styled.p`
	padding: 0 20px;
`;

export default function Event(props) {
	const [isOpen, setIsOpen] = useState(false);
	const {
		onClick,
		name,
		description,
		location,
		duration,
		start,
		end,
		translations,
		lang,
	} = props;
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
		<Details
			ref={detailsRef}
			onClick={(e) => {
				e.preventDefault();
			}}
		>
			<Summary
				onClick={(e) => {
					e.preventDefault();
					onClick({
						...e,
						currentTarget: detailsRef.current,
					});
				}}
				aria-expanded={isOpen}
			>
				<DateBox
					datetime={start}
					translations={translations}
					lang={lang}
				/>
				<EventSummaryText>
					<EventName>{name}</EventName>
					<TimeAndLocation
						location={location}
						start={start}
						end={end}
						duration={duration}
						translations={translations}
						lang={lang}
					/>
				</EventSummaryText>
				<EventAccordionArrow isOpen={isOpen} />
			</Summary>
			<Body>
				{description || translations.no_description[lang] || 'No description'}
			</Body>
		</Details>
	);
}
