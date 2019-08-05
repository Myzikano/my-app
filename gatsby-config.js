module.exports = {
  siteMetadata: {
    title: 'Dmitriy Kulikov',
    description: 'Welcome to my portfolio site. You can watch my portfolio and hire me.',
    keywords: 'design, react, illustration, sketch app, figma, web design, after effects, photoshop'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ijrh7clswof0',
        accessToken: 'B1kNkr5cCD_C1HiOohCEc6M0tjcq25RPQWr6SeueuTw'
      }
    }
  ],
}
