import type { NavigationItem } from '@/definitions/interfaces'
import { getArrayLastItem, getCapitalizedString } from '@aracna/core'
import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content'

export async function getCollectioNavigationItems(key: CollectionKey): Promise<NavigationItem[]> {
  let entries: CollectionEntry<CollectionKey>[], items: NavigationItem[]

  entries = await getCollection(key)
  items = []

  for (let entry of entries) {
    let i: number, sslug: string[], folders: string[], file: string | undefined, item: NavigationItem | undefined

    i = entries.indexOf(entry)
    sslug = ['/' + key, ...entry.slug.split('/')]
    folders = sslug.slice(0, sslug.length - 1)

    file = getArrayLastItem(sslug)
    if (!file) throw new Error(`Missing file.`)

    for (let folder of folders) {
      let j: number, slug: string

      j = folders.indexOf(folder)
      slug = folders.slice(0, j + 1).join('/')

      if (j <= 0) {
        item = items.find((item: NavigationItem) => item.slug === slug)
        if (item) continue

        item = {
          items: [],
          order: entry.data.order ?? j,
          slug: slug,
          title: getFolderTitle(folder)
        }
        items.push(item)

        continue
      }

      if (j > 0 && item?.items) {
        let nitem: NavigationItem | undefined

        nitem = item.items.find((item: NavigationItem) => item.slug === slug)
        if (nitem) {
          item = nitem
          continue
        }

        nitem = {
          items: [],
          order: entry.data.order ?? j,
          slug: slug,
          title: getFolderTitle(folder)
        }
        item.items.push(nitem)
        item = nitem

        continue
      }
    }

    if (typeof item?.items === 'undefined') {
      continue
    }

    if (entry.data.draft) {
      continue
    }

    item.items.push({
      order: entry.data.order ?? item.items.length,
      slug: sslug.join('/'),
      title: entry.data.title
    })
    item.items = item.items.sort((a: NavigationItem, b: NavigationItem) => a.order - b.order)
  }

  return items.sort((a: NavigationItem, b: NavigationItem) => a.order - b.order)
}

function getFolderTitle(folder: string): string {
  switch (folder) {
    case '/fcm':
      return 'FCM'
    case '/state-manager':
      return 'State Manager'
    default:
      return getCapitalizedString(folder.replace('/', ''))
  }
}

function getNavigationItemsLength(items: NavigationItem[]): number {
  return items.reduce((length: number, item: NavigationItem) => length + getNavigationItemsLength(item.items ?? []), items.length)
}
