import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	justify-self: flex-end;
	margin-left: auto;
	width: 50px;
	height: 50px;
`;

export default function EventAccordionArrow({ isOpen }) {
	const Icon = (props) =>
		isOpen ? (
			<IoChevronUpSharp {...props} />
		) : (
			<IoChevronDownSharp {...props} />
		);
	return (
		<Container>
			<Icon
				size={25}
				style={{
					margin: 'auto',
				}}
			/>
		</Container>
	);
}
