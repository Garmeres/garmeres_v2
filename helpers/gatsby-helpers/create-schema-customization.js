exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type SEOLink {
        href: String!
        rel: String!
        hrefLang: String
        target: String
    }
    type SEOMeta {
        name: String
        property: String
        content: String
        charSet: String
    }
    type SEO {
      title: String!
      links: [SEOLink]!
      lang: String!
      meta: [SEOMeta]!
    }
  `;
    createTypes(typeDefs);
};
