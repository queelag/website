export function mergeTemplateStringsArrayWithArgs(template: TemplateStringsArray, args: any[]): string {
  let merged: string = ''

  for (let i in template) {
    merged += template[i] + (args[i] ?? '')
  }

  return merged
}
