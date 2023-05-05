// import PARSER_BABEL from 'prettier/parser-babel'
// import PARSER_HTML from 'prettier/parser-html'
// import PARSER_POSTCSS from 'prettier/parser-postcss'
// import prettier from 'prettier/standalone'

export function html(template: TemplateStringsArray): string {
  let isCSS, isTypescript, isHTML, ptemplate, spaces

  isCSS = template[0].includes('<style>')
  isTypescript = template[0].includes('<script>')
  isHTML = template[0].includes('<html') || (!isCSS && !isTypescript)

  ptemplate = isHTML ? template[0] : template[0].replace(/<\/?(script|style)>/gm, '')
  spaces = ptemplate.match(/^[^\S\r\n]+[^\s\r\n]/m)

  if (spaces?.[0]) {
    ptemplate = ptemplate.replace(new RegExp(spaces[0].slice(0, -1), 'gm'), '')
  }

  ptemplate = ptemplate.trim()

  return ptemplate
  // return prettier.format(isHTML ? template[0] : template[0].replace(/<\/?(script|style)>/gm, ''), {
  //   jsxSingleQuote: true,
  //   parser: isHTML ? 'html' : isTypescript ? 'babel-ts' : isCSS ? 'css' : 'html',
  //   plugins: [PARSER_BABEL, PARSER_HTML, PARSER_POSTCSS],
  //   semi: !isHTML,
  //   singleQuote: true,
  //   trailingComma: 'none'
  // })
}
