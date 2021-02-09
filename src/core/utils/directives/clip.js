// Usage: <div v-clip.pointer="'Click to copy inner text'">
// This or simply use clipboard npm package, but vanilla it is :D
function copyToClipboard(text) {
  const textarea = document.createElement('textarea')
  // Move it off-screen.
  textarea.style.cssText = 'position: absolute; left: -99999em'
  // Set to readonly to prevent mobile devices opening a keyboard when
  // text is .select()'ed.
  textarea.setAttribute('readonly', true)
  document.body.appendChild(textarea)

  textarea.value = text
  // Check if there is any content selected previously.
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false
  // iOS Safari blocks programmatic execCommand copying normally, without this hack.
  // https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    const editable = textarea.contentEditable
    textarea.contentEditable = true
    const range = document.createRange()
    range.selectNodeContents(textarea)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    textarea.setSelectionRange(0, 999999)
    textarea.contentEditable = editable
  } else {
    textarea.select()
  }
  try {
    const result = document.execCommand('copy')
    // Restore previous selection.
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }
    return result
  } catch (err) {
    // console.error(err)
    return false
  }
}
// Vue 3 directive is a breaking change
// See docs: https://v3.vuejs.org/guide/migration/custom-directives.html#_3-x-syntax
export default {
  mounted(el, binding) {
    if (binding.value) {
      el.title = binding.value
    }
    const modifiers = Object.keys(binding.modifiers)
    if (modifiers.length === 0) {
      console.warn('v-clip should be used with a modifier as cursor')
    } else if (modifiers.length > 1) {
      throw new Error('v-clip only take 1 modifier as cursor')
    } else {
      el.style.cursor = modifiers[0]
    }
    el.addEventListener('click', () => {
      copyToClipboard(el.textContent)
    })
  },
}
