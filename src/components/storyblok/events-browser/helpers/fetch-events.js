export const fetchEvents = async (pageNumber) => {
	const eventsUrl = `${process.env.GATSBY_EVENTS_API_URL}/pages/${pageNumber}.json`;
	const response = await fetch(eventsUrl);
	if (!response.ok) {
		throw Error(`Failed to fetch events. Status code: ${response.status}`);
	}
	return response.json();
};
