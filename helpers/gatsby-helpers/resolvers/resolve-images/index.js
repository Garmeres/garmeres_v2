const {
    getImagesFromBlok,
} = require("../../../storyblok-helpers/get-images-from-blok.js");

const getImageFile = (imageUrl, context) =>
    context.nodeModel.findOne({
        type: "File",
        query: {
            filter: {
                url: {
                    eq: imageUrl,
                },
            },
        },
    });

const resolveNodeImages = async (source, args, context, info) =>
    [
        ...new Set(
            getImagesFromBlok(source, "field_component").map(
                (image) => image.filename
            )
        ),
    ].map((imageUrl) => getImageFile(imageUrl, context));

module.exports = { resolveNodeImages };
