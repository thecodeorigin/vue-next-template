export const required = (value) => (value ? true : false)

export const string = (value) => typeof value === 'string'

export const min = (arg, value) => arg <= value
export const max = (arg, value) => arg >= value

export const min_length = (arg, value) => arg <= value.length
export const max_length = (arg, value) => arg >= value.length

export default {
  required,
  min,
  max,
  min_length,
  max_length,
}
