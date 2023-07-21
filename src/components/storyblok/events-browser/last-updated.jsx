import React from 'react';
import styled from 'styled-components';
import { createLastUpdatedString } from './helpers/string-formatter';

const Container = styled.p`
	margin: 0 auto;
	margin-bottom: 1em;
	color: var(--bg-color-dark);
	min-height: 24px;
`;

export default function LastUpdated({ updatedLabel, lastUpdated }) {
	const lastUpdatedString = createLastUpdatedString(updatedLabel, lastUpdated);
	return (
		<Container>
			{lastUpdatedString != null ? <span>{lastUpdatedString}</span> : null}
		</Container>
	);
}
