/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  // https://github.com/neutrinojs/webpack-chain/tree/v4#getting-started
  chainWebpack(config) {
    // Set up all the aliases we use in our app.
    config.resolve.alias.clear().merge(require('./aliases.config').webpack)

    // Don't allow importing .vue files without the extension, as
    // it's necessary for some Vetur autocompletions.
    config.resolve.extensions.delete('.vue')

    // Only enable performance hints for production builds,
    // outside of tests.
    config.performance.hints(
      process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&
        'warning'
    )
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
}
