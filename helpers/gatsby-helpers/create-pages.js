const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const pageTemplate = path.resolve(`src/templates/page.js`);
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
                        lang
                    }
                }
            }
            pages: allStoryblokEntry(
                filter: { field_component: { eq: "page" } }
            ) {
                edges {
                    node {
                        id
                        full_slug
                        slug
                        lang
                    }
                }
            }
        }
    `);
    result.data.pages.edges.forEach((edge) => {
        if (edge.node.slug !== "index") {
            createPage({
                path: `${edge.node.full_slug}`,
                component: pageTemplate,
                context: {
                    id: edge.node.id,
                    lang: edge.node.lang,
                },
            });
        }
    });
    result.data.blogPosts.edges.forEach((edge) => {
        createPage({
            path: `${edge.node.full_slug}`,
            component: blogPostTemplate,
            context: {
                id: edge.node.id,
                lang: edge.node.lang,
            },
        });
    });
};
