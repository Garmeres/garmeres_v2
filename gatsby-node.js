const {
    createPages,
    createSchemaCustomization,
    createResolvers,
} = require("./helpers/gatsby-helpers");

exports.createPages = (helpers) => createPages(helpers);

exports.createSchemaCustomization = ({ actions }) =>
    createSchemaCustomization({ actions });

exports.createResolvers = (helpers) => createResolvers(helpers);
