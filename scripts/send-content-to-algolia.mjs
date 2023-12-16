import algoliasearch from 'algoliasearch'
import { config } from 'dotenv'
import { readFile } from 'fs/promises'
import { glob } from 'glob'

config()

const files = await glob('./src/content/**/*.mdx')
const objects = []

for (const file of files) {
  const mdx = await readFile(file, 'utf8')
  const matter = getMatter(mdx)
  const slug = getSlug(file)
  const text = getText(mdx)

  if (text.length <= 0) {
    console.warn(`Skipping ${file}`)
    continue
  }

  objects.push({
    objectID: slug,
    slug: slug,
    text: text,
    title: matter.get('title')
  })
}

/**
 * @param {string} mdx
 * @returns {Map<string, string>}
 */
function getMatter(mdx) {
  const io0 = mdx.indexOf('---')
  const io1 = mdx.indexOf('---', io0 + 1)
  const raw = mdx.slice(io0 + 3, io1).trim()

  return new Map(raw.split('\n').map((line) => line.split(':').map((s) => s.trim())))
}

/**
 * @param {string} file
 * @returns {string}
 */
function getSlug(file) {
  return file.replace('src/content/', '').replace('.mdx', '')
}

/**
 * @param {string} mdx
 * @returns {string}
 */
function getText(mdx) {
  const io0 = mdx.indexOf('---')
  const io1 = mdx.indexOf('---', io0 + 1)

  return (
    mdx
      .slice(io1 + 3)
      // Remove Imports
      .replace(/import {[^}]+} from '[^']+'/gm, '')
      // Remove JSX
      .replace(/<[a-zA-Z]+[^>]+>[^<]+<\/[a-zA-Z]+>/gm, '')
      .replace(/<[a-zA-Z]+[^>]+>/gm, '')
      // Remove Blockquotes
      .replace(/> /gm, '')
      // Remove Bold
      .replace(/\*\*([^*])\*\*/gm, '$1')
      // Remove Code Blocks
      .replace(/```[^`]+```/gm, '')
      // Remove Headings
      .replace(/#{1,6} /gm, '')
      // Remove Horizontal Rules
      .replace(/---/gm, '')
      // Remove Images
      .replace(/!\[([^\]]+)\]\([^\)]+\)/gm, '$1')
      // Remove Inline Code
      .replace(/`[^`]+`/gm, '')
      // Remove Italic
      .replace(/\*([^*])\*/gm, '$1')
      // Remove Links
      .replace(/\[([^\]]+)\]\([^\)]+\)/gm, '$1')
      // Remove Lists
      .replace(/[0-9]+\. /gm, '')
      .replace(/\* /gm, '')
      // Remove Excess Newlines
      .replace(/\n{3,}/gm, '\n\n')
      .trim()
  )
}

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY)
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME)

index
  .saveObjects(objects)
  .catch((error) => console.error(error))
  .then((response) => console.info('Objects saved.', response))
