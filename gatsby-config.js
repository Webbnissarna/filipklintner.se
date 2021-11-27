require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.filipklintner.se",
    title: "filipklintner",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_CMS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: require("./src/theme.ts"),
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
