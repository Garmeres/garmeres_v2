import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata.js";

const SEO = ({ title, description, pathname, children, image, lang }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        lang: defaultLang,
        siteUrl,
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || `${siteUrl}${defaultImage}`,
        url: `${siteUrl}${pathname || ``}`,
        lang: lang | defaultLang,
    };

    return (
        <>
            <title>{seo.title}</title>
            <html lang={lang} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            {children}
        </>
    );
};

export default SEO;
