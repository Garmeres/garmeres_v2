const {
    getLinksFromBlok,
} = require("../../../storyblok-helpers/get-links-from-blok");

const resolveStoryblokLinks = (source, args, context, info) =>
    getLinksFromBlok(source).map((link) =>
        context.nodeModel.findOne({
            type: "StoryblokLink",
            query: {
                filter: {
                    uuid: {
                        eq: link,
                    },
                },
            },
        })
    );

module.exports = { resolveStoryblokLinks };
