import React from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: auto;
`;

export default function EventsLoader() {
	return (
		<Container>
			<ClipLoader size={50} />
		</Container>
	);
}
