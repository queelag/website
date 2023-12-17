import { Chip } from '@/components/Chip'
import { Empty } from '@/components/Empty'
import { DialogController } from '@/controllers/dialog-controller'
import type { Hit, SearchResponse } from '@algolia/client-search'
import { debounce, tcp } from '@aracna/core'
import { IconFeatherSearch } from '@aracna/icons-feather-react/components/search'
import { useWindowEventListener } from '@aracna/react'
import { AracnaDialog } from '@aracna/react-components/components/feedback/dialog'
import { AracnaInput } from '@aracna/react-components/components/input/input'
import { AracnaListBox, AracnaListBoxOption } from '@aracna/react-components/components/input/list-box'
import { useObservable, useObserver, useReaction } from '@aracna/state-manager-react'
import algoliasearch from 'algoliasearch'
import './DialogSearch.css'

const search = algoliasearch(import.meta.env.PUBLIC_ALGOLIA_APP_ID, import.meta.env.PUBLIC_ALGOLIA_API_KEY)
const index = search.initIndex('website')

interface T {
  slug: string
  text: string
  title: string
}

interface Store {
  hits: Hit<T>[]
  query: string
}

export function DialogSearch() {
  const store = useObservable<Store>({ hits: [], query: '' })

  const onClose = () => {
    DialogController.hide('search')
  }

  const search = async (query: string = '') => {
    let response: SearchResponse<T> | Error

    if (query.length < 3) {
      store.hits = []
      return
    }

    response = await tcp(() => index.search<T>(query, { hitsPerPage: 5 }))
    if (response instanceof Error) return

    store.hits = response.hits
  }

  useReaction(
    () => store.query,
    (query?: string) => debounce('ds', () => search(query), 500)
  )

  useWindowEventListener('keydown', (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault()
      event.stopPropagation()

      DialogController.show('search')
    }
  })

  return useObserver(() => (
    <AracnaDialog id='search' onDialogClose={onClose} visible={DialogController.isVisible('search')} click-outside-deactivates>
      <div className='input-box'>
        <IconFeatherSearch stroke='white' stroke-width={3} />
        <AracnaInput padding='16px 48px 16px 48px' path='query' placeholder='Search' target={store} normalized />
        <Chip layer={1} text='ESC' />
      </div>
      {store.hits.length <= 0 && (
        <Empty className='px-4 py-8' headline='Search' text={store.query.length >= 3 ? 'No results found.' : 'Type something to start searching!'} />
      )}
      {store.hits.length > 0 && (
        <AracnaListBox>
          {store.hits.map((hit: Hit<T>) => (
            <AracnaListBoxOption key={hit.objectID}>
              <a href={hit.slug}>
                <span className='title'>{hit.title}</span>
                <span className='text'>{hit.text}</span>
              </a>
            </AracnaListBoxOption>
          ))}
        </AracnaListBox>
      )}
    </AracnaDialog>
  ))
}
