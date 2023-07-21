export function onEventClick(e) {
	const isOpen = e.currentTarget.open;
	Array.from(
		document.getElementsByClassName(e.currentTarget.className)
	).forEach((element) => {
		element.removeAttribute('open');
	});
	if (!isOpen) e.currentTarget.setAttribute('open', true);
}

export function eventObserver(setIsOpen) {
	return new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
				setIsOpen(mutation.target.open);
			}
		});
	});
}
