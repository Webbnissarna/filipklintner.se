module.exports = {
  siteMetadata: {
    siteUrl: "https://www.filipklintner.se",
    title: "filipklintner",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "",
      },
    },
    "gatsby-plugin-theme-ui",
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
  ],
};
