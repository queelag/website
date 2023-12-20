import type { SidebarItemProps } from '@/definitions/props'
import { getArrayLastItem, getCapitalizedString } from '@aracna/core'
import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content'

export async function getCollectionSidebarItems(key: CollectionKey): Promise<SidebarItemProps[]> {
  let entries: CollectionEntry<CollectionKey>[], items: SidebarItemProps[]

  entries = await getCollection(key)
  items = []

  for (let entry of entries) {
    let i: number, sslug: string[], folders: string[], file: string | undefined, item: SidebarItemProps | undefined

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
        item = items.find((item: SidebarItemProps) => item.slug === slug)
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
        let nitem: SidebarItemProps | undefined

        nitem = item.items.find((item: SidebarItemProps) => item.slug === slug)
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
    item.items = item.items.sort((a: SidebarItemProps, b: SidebarItemProps) => a.order - b.order)
  }

  return items.sort((a: SidebarItemProps, b: SidebarItemProps) => a.order - b.order)
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

function getSidebarItemsLength(items: SidebarItemProps[]): number {
  return items.reduce((length: number, item: SidebarItemProps) => length + getSidebarItemsLength(item.items ?? []), items.length)
}
