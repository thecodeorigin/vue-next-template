// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `prependData` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      // See docs: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
      // scss: {
      //   additionalData: `@import "~@/assets/scss/global/all.scss";`
      // }
    }
  }
};
