import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CookieConsent from 'react-cookie-consent';

const CookieBannerLink = styled((props) => <Link {...props} />)`
	color: var(--theme-color-light-blue);
`;

export default function CookieBanner() {
	return (
		<CookieConsent
			location='bottom'
			buttonText='Accept'
			declineButtonText='Decline'
			cookieName='gatsby-gdpr-google-analytics'
			buttonStyle={{
				backgroundColor: 'var(--theme-color-light-yellow)',
			}}
		>
			<p>
				This site uses Google Analytics 4 to collect anonymised usage data. By
				clicking the "Accept" button, you consent to the use of cookies and data
				collection. For more information, please review our{' '}
				<CookieBannerLink to='/privacy-policy'>Privacy policy</CookieBannerLink>
				.
			</p>
		</CookieConsent>
	);
}
