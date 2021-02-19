import { useRouter } from 'vue-router'

/**
 * Manually throw page error in composition API setup
 * log to console in dev mode and redirect to error page,
 *
 * @param {*} error Error object
 * @param {String} message Custom message, only print in dev mode
 * @param {Number} statusCode Throw 500 by default
 */
export const $error = (error) => {
  if (process.env.NODE_ENV !== 'production') {
    // OPrint custom message if have
    console.error(error)
  } else {
    console.error('Something is wrong')
  }
  const router = useRouter()
  router.push({
    path: '/error',
    query: {
      statusCode: error.statusCode ? error.statusCode : 500,
      message: error.message ? error.message : 'Something is wrong',
    },
  })
}

export const errorHandlingPlugin = {
  install(app) {
    // errorHandler: (err, vm, info) => void
    app.config.errorHandler = (err) => {
      if (process.env.NODE_ENV !== 'production') {
        // Print custom message if have
        console.error(err)
      } else {
        console.error('Something is wrong')
      }
      app.config.globalProperties.$router.push({
        path: '/error',
        query: {
          statusCode: err.statusCode ? err.statusCode : 500,
          message: err.message ? err.message : 'Something is wrong',
        },
      })
    }
    // warnHandler: (msg, vm, trace) => void
    app.config.warnHandler = (msg) => {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(msg)
      }
    }
  },
}
