import { dev } from '@utils/functions/dev'

export const errorHandlingPlugin = {
  install(app) {
    // errorHandler: (err, vm, info) => void
    app.config.errorHandler = (err) => {
      dev.error(err)
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
      dev.warn(msg)
    }
  },
}
