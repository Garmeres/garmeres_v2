import React from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';

const Button = styled.button`
	--burger-button-size: 40px;
	height: var(--burger-button-size);
	width: var(--burger-button-size);
	min-width: var(--burger-button-size);
	max-width: var(--burger-button-size);
	background-color: inherit;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 0;
	padding: 0;
	border: none;
	visibility: hidden;
	display: none;
	@media screen and (max-width: ${variables.screenWidthMedium}) {
		visibility: visible;
		display: flex;
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--burger-button-size: 35px;
	}
`;

const ButtonBar = styled.div`
	background-color: var(--text-color-light);
	width: 100%;
	height: 3px;
`;

const BurgerButton = (props) => {
	return (
		<Button {...props}>
			<ButtonBar />
			<ButtonBar />
			<ButtonBar />
			<ButtonBar />
		</Button>
	);
};

export default BurgerButton;
