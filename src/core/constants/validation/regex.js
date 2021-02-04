/* eslint-disable prettier/prettier */
// List of common regular expressions

// See more at:
// https://regexlib.com - Regular Expression Library (5000+ indexed expressions).
// https://projects.lukehaas.me/regexhub - Useful Regex Patterns.
// https://rgxp.ru - Regular Expression Patterns (+testing)

// Test Regex: https://regexr.com

// A curated collection of awesome Regex libraries, tools, frameworks and software:
// https://github.com/aloisdg/awesome-regex

// Simple email, see full email pattern at: https://regexlib.com/REDetails.aspx?regexp_id=711
export const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g

// HTML tag
export const html = /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/g
// <img> tag with src
export const html_img = /^<\s*img[^>]+src\s*=\s*(["'])(.*?)\1[^>]*>$/g

// URL only, not include query
export const url = /^((https?|ftp|file):\/\/)?([\da-z_\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/g
export const slug = /^[a-z0-9-]+$/
// Youtube video normal URL or share URL
export const youtube = /https?:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\\!)v=)([\w-]{11}).*/gi

export const brainfuck = /^[+-<>.,\\[\] \t\n\r]+$/g

export const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
export const ipv6 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/

//////
// Numeric
//////
export const number = /^([0-9]+)*$/g
export const odd = /^\d*[13579]$/g
export const even = /^\d*[02468]$/g
export const dec = /^-?\d*\.?\d+$/g
export const hex = /0[xX][0-9a-fA-F]+/g

export const hex_color = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g

export const has_digit = /\d/
export const has_number = /(.)*(\\d)(.)* /

//////
// Alphabetical
//////
export const alpha = /^([a-zA-Z])*$/g
export const alpha_dash = /^([a-zA-Z_])*$/g
export const alpha_num = /^([a-zA-Z0-9])*$/g
export const alpha_spaces = /^([a-zA-Z ])*$/g
export const no_special = /(?!\\s+)(^([A-Za-z0-9_ ])*$)/g

const vietnameseRegex =
  'àáạảãâầấậẩẫăằắặẳẵÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ' +
  'èéẹẻẽêềếệểễÈÉẸẺẼÊỀẾỆỂỄ' +
  'ìíịỉĩÌÍỊỈĨ' +
  'òóọỏõôồốộổỗơờớợởỡÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ' +
  'ùúụủũưừứựửữÙÚỤỦŨƯỪỨỰỬỮ' +
  'ỳýỵỷỹỲÝỴỶỸ' +
  'đĐ'

export const vi_alpha = new RegExp(`^([a-zA-Z${vietnameseRegex}])*$`, 'g')
export const vi_alpha_dash = new RegExp(`^([a-zA-Z${vietnameseRegex}_])*$`, 'g')
export const vi_alpha_num = new RegExp(`^([A-Za-z0-9${vietnameseRegex}])*$`, 'g')
export const vi_alpha_spaces = new RegExp(`(?!\\s+)(^([a-zA-Z${vietnameseRegex} ])*$)`, 'g')
export const vi_no_special = new RegExp(`(?!\\s+)(^([A-Za-z0-9${vietnameseRegex}_ ])*$)`, 'g')

export const vi_mobile = /((09|03|07|08|05)+([0-9]{8})\b)/g
export const phone = /^\+?(\d.*){3,}$/g

export const credit_card_number = /\d{4} \d{4} \d{4} \d{4}/g
export const credit_card_expire = /\d{2}\/\d{2}/g
export const credit_card_cvv = /\d{3}/g

//////
// Password
//////

// Only contains letter [a-z] digits[0-9], special characters(@#$%&)
export const pass_1 = /^[a-z0-9.@#$%&]+$/
// Minimum 8 characters at least 1 Alphabet and 1 Number
export const pass_2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character
export const pass_3 = / ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
// Minimum 8 and Maximum 10 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character
export const pass_4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/
// Minimum length 7 and Maximum length 16 Characters allowed [a–z] [A-Z] [0-9]
export const pass_5 = /^[a-zA-Z0-9\s]{7,16}$/

export default {
  email,
  html,
  html_img,
  url,
  slug,
  youtube,
  brainfuck,
  ipv4,
  ipv6,
  number,
  odd,
  even,
  dec,
  hex,
  hex_color,
  has_digit,
  has_number,
  alpha,
  alpha_dash,
  alpha_num,
  alpha_spaces,
  no_special,
  vi_alpha,
  vi_alpha_dash,
  vi_alpha_num,
  vi_alpha_spaces,
  vi_no_special,
  vi_mobile,
  phone,
  credit_card_number,
  credit_card_expire,
  credit_card_cvv,
  pass_1,
  pass_2,
  pass_3,
  pass_4,
  pass_5,
}
