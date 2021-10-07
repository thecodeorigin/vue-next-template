// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  compilerOptions: {
    target: "esnext",
    module: "esnext",
    strict: true,
    jsx: "preserve",
    importHelpers: true,
    moduleResolution: "node",
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    sourceMap: true,
    baseUrl: ".",
    types: [
      "jest"
    ],
    paths: {
      '@/*': [
        "src/*"
      ]
    },
    lib: [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  include: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  exclude: [
    "node_modules",
    "dist",
  ]
};
