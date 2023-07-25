export async function fetchBlogPosts({
	language,
	page,
	per_page,
	starts_with,
}) {
	let urlParams = {
		token: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
		content_type: 'blog-post',
		is_startpage: 0,
		sort_by: 'first_published_at:desc',
		language: language,
		page: page,
		per_page: per_page,
	};
	if (starts_with != null) {
		urlParams['starts_with'] = starts_with;
	}
	const result = await fetch(
		`${process.env.GATSBY_STORYBLOK_API_URL}?${new URLSearchParams(urlParams)}`
	);
	return {
		...(await result.json()),
		total: result.headers.get('total'),
	};
}
