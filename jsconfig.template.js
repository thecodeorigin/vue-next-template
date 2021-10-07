// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '~/*': ['./*'],
      '@/*': ['./*'],
      '~~/*': ['./*'],
      '@@/*': ['./*'],
    },
    // ...
    // `paths` will be automatically generated using aliases.config.js
    // ...
  },
  exclude: ['node_modules', 'dist'],
};
