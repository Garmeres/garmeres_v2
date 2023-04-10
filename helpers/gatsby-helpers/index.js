const { createPages } = require("./create-pages.js");
const {
    createSchemaCustomization,
} = require("./create-schema-customization.js");
const { createResolvers } = require("./create-resolvers.js");

module.exports = {
    createPages,
    createSchemaCustomization,
    createResolvers,
};
