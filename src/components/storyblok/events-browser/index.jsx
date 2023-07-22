import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchEvents } from './helpers/fetch-events';
import EventsPageDisplay from './events-display';
import EventsNav from './events-nav';
import LastUpdated from './last-updated';
import variables from '../../../styles/variables';

const EventsBrowserContainer = styled.div`
	--page-content-width: ${variables.pageContentWidthDefault};
	width: var(--page-content-width);
	min-width: var(--page-content-width);
	max-width: var(--page-content-width);
	background-color: var(--bg-color-article);
	position: relative;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	flex-grow: 1;
	box-sizing: border-box;
	padding: 10vh 5vw;

	* {
		outline-color: var(--highlight-color-dark);
	}

	@media screen and (max-width: ${variables.screenWidthExtraLarge}) {
		--page-content-width: ${variables.pageContentWidthExtraLarge};
	}
	@media screen and (max-width: ${variables.screenWidthLarge}) {
		--page-content-width: ${variables.pageContentWidthLarge};
	}
	@media screen and (max-width: ${variables.screenWidthMediumLarge}) {
		--page-content-width: ${variables.pageContentWidthMediumLarge};
	}
	@media screen and (max-width: ${variables.screenWidthMedium}) {
		--page-content-width: ${variables.pageContentWidthMedium};
	}
	@media screen and (max-width: ${variables.screenWidthMediumSmall}) {
		--page-content-width: ${variables.pageContentWidthMediumSmall};
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--page-content-width: ${variables.pageContentWidthSmall};
	}
	@media screen and (max-width: ${variables.screenWidthExtraSmall}) {
		--page-content-width: ${variables.pageContentWidthExtraSmall};
	}
`;

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

	const { blok } = props;
	const {
		title,
		duration_label,
		location_label,
		no_events_label,
		next_page_label,
		prev_page_label,
		time_label,
		page_label,
		updated_label,
	} = blok;

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
		<EventsBrowserContainer>
			<Container aria-label={title}>
				<Title>{title}</Title>
				<LastUpdated
					key='last-updated'
					lastUpdated={lastUpdated}
					updatedLabel={updated_label}
				/>
				<EventsPageDisplay
					isLoading={isLoading}
					page={currentPage}
					timeLabel={time_label}
					durationLabel={duration_label}
					locationLabel={location_label}
					noEventsLabel={no_events_label}
				/>
				{pages.length > 0 ? (
					<EventsNav
						currentPageNumber={currentPageNumber}
						totalPages={totalPages}
						onNavigate={(pageNumber) => setCurrentPageNumber(pageNumber)}
						disabled={isLoading}
						nextPageLabel={next_page_label}
						prevPageLabel={prev_page_label}
						pageLabel={page_label}
					/>
				) : null}
			</Container>
		</EventsBrowserContainer>
	);
}
