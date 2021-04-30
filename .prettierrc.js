// 具体细节查看此处： https://prettier.io/docs/en/options.html

module.exports = {
  // { useState } from 'react'，需要空格
  bracketSpacing: true,
  // 将 > 放在最后一样的行末，而不是最后一行 
  jsxBracketSameLine: false,
  // 字符串使用单引号
  singleQuote: true,
  // 在数组或者对象中使用 逗号结尾
  trailingComma: 'none',
  // 箭筒函数必须加上括弧
  /**
   * "always" - Always include parens. Example: (x) => x
   * "avoid" - Omit parens when possible. Example: x => x
   */
  arrowParens: 'avoid',
  // 去掉分号
  semi: false
}
