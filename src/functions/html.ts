import { mergeTemplateStringsArrayWithArgs } from '@/utils/string-utils'

export function html(template: TemplateStringsArray, ...args: any[]): string {
  let isScript: boolean, isStyle: boolean, isHTML: boolean, ptemplate: string, spaces: RegExpMatchArray | null

  isScript = template.some((chunk: string) => chunk.includes('<script>'))
  isStyle = template.some((chunk: string) => chunk.includes('<style>'))
  isHTML = template.some((chunk: string) => chunk.includes('<html')) || (!isStyle && !isScript)

  ptemplate = isHTML
    ? mergeTemplateStringsArrayWithArgs(template, args)
    : mergeTemplateStringsArrayWithArgs(template, args).replace(/<\/?(script|style)>/gm, '')
  spaces = ptemplate.match(/^[^\S\r\n]+[^\s\r\n]/m)

  if (spaces?.[0]) {
    ptemplate = ptemplate.replace(new RegExp('^' + spaces[0].slice(0, -1), 'gm'), '')
  }

  ptemplate = ptemplate.trim()

  return ptemplate
}
