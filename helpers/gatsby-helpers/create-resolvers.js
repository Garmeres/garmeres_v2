const { resolveNodeSeo } = require("./resolvers");
exports.createResolvers = ({ createResolvers }) => {
    const resolvers = {
        StoryblokEntry: {
            seo: {
                type: "SEO",
                resolve(source, args, context, info) {
                    return resolveNodeSeo(source, args, context, info);
                },
            },
        },
    };
    createResolvers(resolvers);
};
