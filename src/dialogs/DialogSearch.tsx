import { Chip } from '@/components/Chip'
import { Empty } from '@/components/Empty'
import { Spinner } from '@/components/Spinner'
import { DialogController } from '@/controllers/dialog-controller'
import type { Hit, SearchResponse } from '@algolia/client-search'
import { concatURL, debounce, tcp } from '@aracna/core'
import { IconFeatherSearch } from '@aracna/icons-feather-react/components/search'
import { useWindowEventListener } from '@aracna/react'
import {
  AracnaAriaComboBox,
  AracnaAriaComboBoxGroup,
  AracnaAriaComboBoxInput,
  AracnaAriaComboBoxList,
  AracnaAriaComboBoxOption
} from '@aracna/react-components/components/aria/aria-combo-box'
import { AracnaDialog } from '@aracna/react-components/components/feedback/dialog'
import { useObservable, useObserver } from '@aracna/state-manager-react'
import type { StateChangeEvent } from '@aracna/web'
import algoliasearch from 'algoliasearch'
import { Fragment } from 'react'
import './DialogSearch.css'

const search = algoliasearch(import.meta.env.PUBLIC_ALGOLIA_APP_ID, import.meta.env.PUBLIC_ALGOLIA_API_KEY)
const index = search.initIndex(import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME)

interface T {
  package: string
  slug: string
  text: string
  title: string
}

interface Store {
  hits: Hit<T>[]
  query: string
  searching: boolean
}

export function DialogSearch() {
  const store = useObservable<Store>({ hits: [], query: '', searching: false })

  const onInputStateChange = (event: StateChangeEvent<string>) => {
    if (event.detail?.name !== 'value') {
      return
    }

    store.query = event.detail?.value ?? ''
    store.searching = true

    debounce('ds', () => search(event.detail?.value), 500)
  }

  const onClose = () => {
    DialogController.hide('search')
  }

  const search = async (query: string = '') => {
    let response: SearchResponse<T> | Error

    if (query.length < 3) {
      store.hits = []
      store.searching = false

      return
    }

    response = await tcp(() => index.search<T>(query, { hitsPerPage: 5 }))
    if (response instanceof Error) return

    store.hits = response.hits
    store.searching = false
  }

  useWindowEventListener('keydown', (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault()
      event.stopPropagation()

      DialogController.show('search')
    }
  })

  return useObserver(() => (
    <AracnaDialog id='search' onDialogClose={onClose} visible={DialogController.isVisible('search')} click-outside-deactivates>
      <AracnaAriaComboBox>
        <AracnaAriaComboBoxGroup>
          <IconFeatherSearch stroke='white' stroke-width={3} />
          <AracnaAriaComboBoxInput onStateChange={onInputStateChange}>
            <input placeholder='Search' suppressHydrationWarning />
          </AracnaAriaComboBoxInput>
          <Chip layer={1} onClick={onClose} text='ESC' />
        </AracnaAriaComboBoxGroup>
        {store.searching && <Spinner className='self-center my-8' size={24} stroke='white' />}
        {store.searching === false && (
          <Fragment>
            {store.hits.length <= 0 && (
              <Empty className='px-4 py-8' headline='Search' text={store.query.length >= 3 ? 'No results found.' : 'Type something to start searching!'} />
            )}
            {store.hits.length > 0 && (
              <AracnaAriaComboBoxList>
                {store.hits.map((hit: Hit<T>) => (
                  <a href={concatURL('/', hit.slug)} key={hit.objectID}>
                    <AracnaAriaComboBoxOption label=''>
                      <div>
                        <span className='title'>{hit.title}</span>
                        <Chip layer={2} size='small' text={`@aracna/${hit.package}`} />
                      </div>
                      <span className='text'>{hit.text}</span>
                    </AracnaAriaComboBoxOption>
                  </a>
                ))}
              </AracnaAriaComboBoxList>
            )}
          </Fragment>
        )}
      </AracnaAriaComboBox>
    </AracnaDialog>
  ))
}
