import React from "react";

const SEO = ({ seoNode, children }) => {
    let i = 0;
    return (
        <>
            <title>{seoNode.title}</title>
            <html lang={seoNode.lang} />
            {seoNode.links.map((linkNode) => (
                <link key={i++} {...linkNode} />
            ))}
            {seoNode.meta.map((metaNode) => (
                <meta key={i++} {...metaNode} />
            ))}
            {children}
        </>
    );
};

export default SEO;
