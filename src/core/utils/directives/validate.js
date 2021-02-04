// Vue 3 directive is a breaking change
// See docs: https://v3.vuejs.org/guide/migration/custom-directives.html#_3-x-syntax
import rules from '@constants/validation'
let input = null
let rulesSet = null
export default {
  // eslint-disable-next-line no-unused-vars
  beforeMount(el, binding) {
    console.log(binding)
    input =
      el.getElementsByTagName('input')[0] ?? el.tagName === 'INPUT' ? el : null
    if (input) {
      // Validate args, we use arg for validation trigger specification
      const allowedArgs = ['focus', 'blur', 'change', 'input']
      if (!allowedArgs.includes(binding.arg)) {
        throw new Error(
          `v-validate:argument only takes one argument in ${JSON.stringify(
            allowedArgs
          )}`
        )
      }
      // Require a handler function
      if (!binding.value) {
        throw new Error(
          'v-validate requires a handler function | Ex: v-validate.someRule="handleSomething"'
        )
      }
      // Validate handler function
      if (typeof binding.value !== 'function') {
        throw new Error('v-validate binding value must be a function')
      }
      // Validate rulesSet
      rulesSet = Object.keys(binding.modifiers).map((item) => {
        const pattern = item.split(':')[0]
        const arg = item.split(':')[1] ?? null
        // Handle invalid rule like 'emal', 'requied', 'weird-strange-rule', ...
        if (!Object.keys(rules).includes(pattern)) {
          throw new Error(
            `v-pattern doesn't have "${pattern}" as a valid rules in "@constants/validation"`
          )
        }
        if (rules[pattern] instanceof RegExp && arg) {
          throw new Error(
            `Rule "${pattern}" is a regular expression and take no argument `
          )
        }
        return { pattern, arg }
      })
      const validate = () => {
        const errors = []
        // Test input and push errors to errors array
        rulesSet.forEach(({ pattern, arg }) => {
          // Get validate result
          let result =
            rules[pattern] instanceof RegExp
              ? // If it's rules, test it
                rules[pattern].test(input.value)
              : // Else
              arg
              ? // If it has argument, pass an argument with the input's value
                rules[pattern](arg, input.value)
              : // If it doesn't pass only the input's value
                rules[pattern](input.value)
          // If something wrong, push it in errors
          if (!result) {
            errors.push(`validate.${pattern}`)
          }
        })
        // Invoke passed in method
        binding.value(errors)
      }
      // Handling catched errors
      input.addEventListener('input', validate)
      // Add trigger if user passes it in
      if (binding.arg) input.addEventListener(binding.arg, validate)
    } else {
      throw new Error(
        'v-pattern must be used on an <input> tag or on an element that has only one <input> tag in it'
      )
    }
  },
}
