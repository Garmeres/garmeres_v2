import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import BlogBrowser from './blog-browser';
import Featured from './featured';
import RichText from './rich-text';
import Footer from './footer';
import EventsBrowser from './events-browser';

storyblokInit({
	accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
	use: [apiPlugin],
	components: {
		featured: Featured,
		blog_browser: BlogBrowser,
		rich_text: RichText,
		footer: Footer,
		grid: () => null,
		'events-browser': EventsBrowser,
	},
});

const StoryblokWrapper = ({ children }) => children;

export default StoryblokWrapper;
