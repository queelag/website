import { DialogController } from '@/controllers/dialog-controller'
import type { Hit, SearchResponse } from '@algolia/client-search'
import { debounce, tcp } from '@aracna/core'
import { AracnaDialog } from '@aracna/react-components/components/feedback/dialog'
import { AracnaInput } from '@aracna/react-components/components/input/input'
import { AracnaListBox, AracnaListBoxOption } from '@aracna/react-components/components/input/list-box'
import { useObserver } from '@aracna/state-manager-react'
import type { StateChangeEvent } from '@aracna/web'
import algoliasearch from 'algoliasearch'
import { useState } from 'react'
import './DialogSearch.css'

const search = algoliasearch(import.meta.env.PUBLIC_ALGOLIA_APP_ID, import.meta.env.PUBLIC_ALGOLIA_API_KEY)
const index = search.initIndex('website')

interface T {
  slug: string
  text: string
  title: string
}

export function DialogSearch() {
  const [hits, setHits] = useState<Hit<T>[]>([])

  const onClose = () => {
    DialogController.hide('search')
  }

  const onStateChange = (event: StateChangeEvent<string>) => {
    if (event.detail?.value) {
      debounce('ds', () => search(event.detail?.value), 500)
    }
  }

  const search = async (query: string = '') => {
    let response: SearchResponse<T> | Error

    if (query.length < 3) {
      return
    }

    response = await tcp(() => index.search<T>(query, { hitsPerPage: 5 }))
    if (response instanceof Error) return

    setHits(response.hits)
  }

  return useObserver(() => (
    <AracnaDialog id='search' onDialogClose={onClose} visible={DialogController.isVisible('search')} click-outside-deactivates>
      <AracnaInput onStateChange={onStateChange} placeholder='Search' normalized />
      {hits.length > 0 && (
        <AracnaListBox>
          {hits.map((hit: Hit<T>) => (
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
