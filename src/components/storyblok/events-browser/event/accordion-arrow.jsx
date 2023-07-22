import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';
import React from 'react';
import styled from 'styled-components';
import variables from '../../../../styles/variables';

const Container = styled.div`
	--arrow-btn-width: 60px;
	--arrow-btn-height: 60px;
	display: inline-flex;
	justify-content: center;

	width: var(--arrow-btn-width);
	min-width: var(--arrow-btn-width);
	max-width: var(--arrow-btn-width);

	height: var(--arrow-btn-height);
	min-height: var(--arrow-btn-height);
	max-height: var(--arrow-btn-height);

	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--arrow-btn-height: 75px;
	}
`;

export default function EventAccordionArrow({ isOpen }) {
	const Icon = (props) =>
		isOpen ? (
			<IoChevronUpSharp {...props} />
		) : (
			<IoChevronDownSharp {...props} />
		);
	return (
		<Container aria-hidden='true'>
			<Icon
				size={25}
				style={{
					margin: 'auto',
				}}
			/>
		</Container>
	);
}
