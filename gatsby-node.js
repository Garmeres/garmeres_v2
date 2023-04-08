const path = require(`path`);
const {
    resolveBlogPostSeo,
} = require("./helpers/gatsby-helpers/resolve-seo.js");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    const result = await graphql(`
        query {
            blogPosts: allStoryblokEntry(
                filter: { field_component: { eq: "blog-post" } }
            ) {
                edges {
                    node {
                        id
                        full_slug
                    }
                }
            }
        }
    `);
    result.data.blogPosts.edges.forEach((edge) => {
        createPage({
            path: `${edge.node.full_slug}`,
            component: blogPostTemplate,
            context: {
                id: edge.node.id,
            },
        });
    });
};

exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions;
    // Transform the new node here and create a new node or
    // create a new node field.
    if (node.field_component === "blog-post") {
        createNodeField({
            node,
            name: `seo`,
            value: resolveBlogPostSeo(node, actions),
        });
    }
};
