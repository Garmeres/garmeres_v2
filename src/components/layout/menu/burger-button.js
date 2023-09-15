import React from 'react';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import { RxHamburgerMenu } from 'react-icons/rx';

const Button = styled.button`
	--burger-button-size: 50px;
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
	color: var(--text-color-light);
	@media screen and (max-width: ${variables.screenWidthMedium}) {
		visibility: visible;
		display: flex;
	}
	@media screen and (max-width: ${variables.screenWidthSmall}) {
		--burger-button-size: 45px;
	}
`;

const BurgerButton = (props) => {
	return (
		<Button {...props}>
			<RxHamburgerMenu size={'100%'} />
		</Button>
	);
};

export default BurgerButton;
