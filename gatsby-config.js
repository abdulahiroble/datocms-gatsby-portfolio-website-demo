require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
    siteUrl: "https://godepodcasts.dk/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-170122921-1",
      },
    },
  ],
};
