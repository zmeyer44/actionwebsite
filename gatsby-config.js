module.exports = {
  siteMetadata: {
    title: `Action App`,
    description: `Action is a social discovery platform that allows people to
search for, discover, and keep track ofthings across the
digital and physical worlds.`,
    author: `Zach Meyer`,
    siteUrl: `https://actionapp.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `discovr`,
        short_name: `discovr`,
        start_url: `/app`,
        background_color: `#1273f8`,
        theme_color: `#1273f8`,
        display: `standalone`,
        icon: `src/images/favicons/apple-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyD2OtkD7Zrmw9Vo622y7IOQLEpo5dGFpig",
          authDomain: "discovr-98d5c.firebaseapp.com",
          projectId: "discovr-98d5c",
          storageBucket: "discovr-98d5c.appspot.com",
          messagingSenderId: "174163519650",
          appId: "1:174163519650:web:da7a882e569bc0dd640ffb",
          measurementId: "G-3XGBF07B5J",
        },
      },
    },
    {
      resolve: `gatsby-source-firestore-easy`,
      options: {
        adminCredential: {
          credential: require("./firestoreCredentials.json"),
        },
        collections: [],
      },
    },
  ],
}
