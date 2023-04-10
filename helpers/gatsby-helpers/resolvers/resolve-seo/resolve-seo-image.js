const {
    getImagesFromBlok,
} = require("../../../storyblok-helpers/get-images-from-blok.js");

const getSeoNodeImage = (seoNode) => {
    return {
        filename: JSON.parse(seoNode.content).seo.og_image,
        alt: null,
    };
};

const getNodeImage = (source, seoNode) => {
    const images = getImagesFromBlok(source, "field_component");
    return images.length === 0 ? getSeoNodeImage(seoNode) : images[0];
};

const getBlogPostImage = (source, seoNode) => {
    const content = JSON.parse(source.content);
    if (content.thumbnail != null && content.thumbnail.filename !== "") {
        return {
            filename: content.thumbnail.filename,
            alt: content.thumbnail.alt,
        };
    } else {
        return getNodeImage(source, seoNode);
    }
};

const imageResolvers = {
    "blog-post": (source, seoNode) => getBlogPostImage(source, seoNode),
    default: (source, seoNode) => getNodeImage(source, seoNode),
};

const resolveImage = (source, seoNode) =>
    imageResolvers[source.field_component] != null
        ? imageResolvers[source.field_component](source, seoNode)
        : imageResolvers.default(source, seoNode);

const getOgMetaTagsFromImage = (image) => {
    let tags = [
        {
            property: "og:image",
            content: image.filename,
        },
        {
            property: "og:image:url",
            content: image.filename,
        },
    ];
    if (image.filename.includes(".")) {
        tags.push({
            property: "og:image:type",
            content: `image/${image.filename.split(".").pop()}`,
        });
    }
    if (image.alt != null) {
        tags.push({
            property: "og:image:alt",
            content: image.alt,
        });
    }
    return tags;
};

const getTwitterMetaTagsFromImage = (image) => {
    let tags = [
        {
            property: "twitter:image",
            content: image.filename,
        },
    ];
    if (image.alt != null) {
        tags.push({
            property: "twitter:image:alt",
            content: image.alt,
        });
    }
    return tags;
};

const resolveSeoImage = (source, seoNode) =>
    imageResolvers[source.field_component] != null
        ? imageResolvers[source.field_component](source, seoNode)
        : imageResolvers.default(source, seoNode);

const resolveSeoOgImageMetaTags = (source, seoNode) =>
    getOgMetaTagsFromImage(resolveImage(source, seoNode));

const resolveSeoTwitterImageMetaTags = (source, seoNode) =>
    getTwitterMetaTagsFromImage(resolveImage(source, seoNode));

module.exports = {
    resolveSeoImage,
    resolveSeoOgImageMetaTags,
    resolveSeoTwitterImageMetaTags,
};
