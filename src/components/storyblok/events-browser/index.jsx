import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchEvents } from './helpers/fetch-events';
import EventsPageDisplay from './events-display';
import EventsNav from './events-nav';
import LastUpdated from './last-updated';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 5px;
	min-height: 200px;
	width: 100%;
	max-width: 600px;
	padding: 0;
	margin: 0 auto;
	margin-bottom: 1em;
`;

const Title = styled.h2`
	padding: 10px;
	margin: 0 auto;
	text-align: center;
`;

export default function EventsBrowser(props) {
	const [currentPageNumber, setCurrentPageNumber] = useState(0);
	const [pagesFetched, setPagesFetched] = useState([]);
	const [pages, setPages] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [lastUpdated, setLastUpdated] = useState(null);

	const { title } = props;

	useEffect(() => {
		async function updateEventsView() {
			if (currentPageNumber >= totalPages) {
				setCurrentPageNumber(totalPages - 1);
				return;
			}
			if (pagesFetched.includes(currentPageNumber)) return;

			setIsLoading(true);
			fetchEvents(currentPageNumber)
				.then((page) => {
					setPages(pages.concat(page));
					setPagesFetched(pagesFetched.concat(currentPageNumber));
					setTotalPages(page['total-pages']);
					if (page['last-updated'] != null) {
						setLastUpdated(page['last-updated']);
					}
				})
				.catch((error) => {
					console.error(error);
					throw Error(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
		updateEventsView();
	}, [currentPageNumber, pagesFetched, pages, totalPages]);

	const currentPage =
		pages.length > currentPageNumber ? pages[currentPageNumber] : null;

	return (
		<Container>
			<Title>{title}</Title>
			<LastUpdated
				key='last-updated'
				lastUpdated={lastUpdated}
				updatedLabel={props['updated_label']}
			/>
			<EventsPageDisplay
				isLoading={isLoading}
				page={currentPage}
			/>
			{pages.length > 0 ? (
				<EventsNav
					currentPageNumber={currentPageNumber}
					totalPages={totalPages}
					onNavigate={(pageNumber) => setCurrentPageNumber(pageNumber)}
					disabled={isLoading}
				/>
			) : null}
		</Container>
	);
}
