module.exports = {
  siteMetadata: {
    title: `Indie Story Games`,
    author: `Indie Story Games`,
    siteUrl: `https://indiestorygames.com`,
    description: `Indie Story Games is an indie gaming website focused on games with stories to tell and the developers behind them. Our favorite games are those that tell a story and start a conversation and would love to bring more attention to the stories the developers behind the games want to tell. Indie Story Games is tailored to prioritize just that, along with shining spotlight on indie developers and studios.`,
    image: `isg-banner.png`,
    thumbnail: `isg-banner.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Indie Story Games`,
        short_name: `ISG`,
        start_url: `/`,
        icon: `src/images/gamepad-book-square.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96548495-2",
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `fraunces\:400,400i,500,500i,600,700`,
          `hanken grotesk\:400,500,600,700,800`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        data: `@use "sass:color";\n@use "${__dirname}/src/styles/variables" as *;\n@use "${__dirname}/src/styles/mixins" as *;`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1240,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `colludia`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
