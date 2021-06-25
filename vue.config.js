/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  publicPath: '/',
  // See issues solved: https://github.com/nuxt/vue-meta/issues/692#issuecomment-865942099
  transpileDependencies: ['vue-meta'],
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
    // See docs: https://cli.vuejs.org/guide/css.html#css-modules
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/core/styles/scss/all.scss";
        `,
      },
      css: {
        // Note: the following config format is different between Vue CLI v4 and v3
        // For Vue CLI v3 users, please refer to css-loader v1 documentations
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          // See docs: https://github.com/webpack-contrib/css-loader#object
          // path: path from src
          // name: fileName
          // local: className
          // hash:base64:5 => Hash a base64 string with the length of 5
          // localIdentName: '[path][name]__[local]--[hash:base64:5]',
          localIdentName:
            process.env.NODE_ENV === 'production'
              ? '[hash:base64:6]'
              : '[path]-[local][hash:base64:3]',
        },
      },
    },
  },
}
