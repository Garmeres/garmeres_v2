const {
    resolveNodeSeo,
    resolveNodeImages,
    resolveStoryblokLinks,
} = require("./resolvers");
exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        StoryblokEntry: {
            seo: {
                type: "SEO",
                resolve(source, args, context, info) {
                    return resolveNodeSeo(source, args, context, info);
                },
            },
            imageFiles: {
                type: "[File]",
                resolve(source, args, context, info) {
                    return resolveNodeImages(source, args, context, info);
                },
            },
            storyblokLinks: {
                type: "[StoryblokLink]",
                resolve(source, args, context, info) {
                    return resolveStoryblokLinks(source, args, context, info);
                },
            },
        },
    };
    createResolvers(resolvers);
};
