/* eslint-disable no-console */

export const dev = {
  /**
   * Equivalent to console.error but in dev mode only
   */
  error: (...args: Array<any>): void => {
    if (import.meta.env.DEV) {
      console.error(...args);
    } else {
      console.error("Something is wrong");
    }
  },
  /**
   * Equivalent to console.log but in dev mode only
   */
  log: (...args: Array<any>): void => {
    if (import.meta.env.DEV) {
      console.log(...args);
    }
  },
  /**
   * Equivalent to console.warn but in dev mode only
   */
  warn: (...args: Array<any>): void => {
    if (import.meta.env.DEV) {
      console.warn(...args);
    }
  },
};

export default dev;
