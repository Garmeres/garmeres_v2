import { bloksToText } from '../../../../../helpers/storyblok-helpers/blok-to-text';

export function getNodeTitle(node) {
	let title =
		node.lang !== 'default'
			? node.translated_slugs.find((item) => item.lang === node.lang).name
			: node.name;
	return title == null ? node.name : title;
}

export function getBlogPostNodeDateString(node) {
	const date = new Date(Date.parse(node.first_published_at));
	const day = date.getDate().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	const month = (date.getMonth() + 1).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
}

export function getBlogPostParagraphText(node) {
	const blogPostText = bloksToText(node.content.body);
	const paragraphLength = 200;
	return `${blogPostText.substring(0, paragraphLength).trim()}${
		blogPostText.length > paragraphLength ? '...' : null
	}`;
}
