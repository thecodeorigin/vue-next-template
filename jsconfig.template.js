// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  baseUrl: '.',
  include: ['src/**/*', 'examples'],
  exclude: ['node_modules', 'dist'],
  typeAcquisition: {
    exclude: ['dotenv', 'source-map'], // Fix /node_modules/dotenv/types not found
  },
  compilerOptions: {
    baseUrl: '.',
    target: 'esnext',
    module: 'es2015',
    // ...
    // `paths` will be automatically generated using aliases.config.js
    // ...
  },
}
