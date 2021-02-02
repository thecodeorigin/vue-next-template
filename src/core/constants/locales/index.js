// This will be required in runtime
// This can slow the app down due to recursive programing and stuff
// Solution: Like nuxt, i'm figuring a way to build these into files first,
// so they can be required in compile time instead runtime

//  This file using require.context() to get in all of the folder recursively and
//  require all the en.js and vi.js files

//  Deleting any file in the folder structure cause some file not found error in the runtime,
//  to fix that, just re-save this file

const en = {}
const vi = {}

const requireModule = require.context('./', true, /\.js$/)
requireModule.keys().forEach(requireModule)
requireModule.keys().forEach((fileName) => {
  if (!fileName.includes('index.js')) {
    const temp = fileName.replace(/(\.\/|\.js)/g, '').split('/')
    const moduleName = temp.length > 1 ? temp[temp.length - 2] : temp[0]
    if (fileName.includes('en.js')) {
      en[moduleName] = requireModule(fileName).default
    } else if (fileName.includes('vi.js')) {
      vi[moduleName] = requireModule(fileName).default
    }
  }
})

export default { en, vi }
