const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query collectionPages {
      allDatoCmsCollectionPage {
        nodes {
          id
          description
          title
          slug
          gallery {
            alt
            gatsbyImageData
            tags
            title
            originalId
            resolutions {
              aspectRatio
            }
          }
        }
      }
    }
  `);

  if (result.data) {
    const allCollections = result.data.allDatoCmsCollectionPage.nodes;
    allCollections.map((collection) => {
      createPage({
        path: `${collection.slug}`,
        component: path.resolve("./src/pages/templates/Collection.tsx"),
        context: {
          ...collection,
        },
      });
    });
  }
};
