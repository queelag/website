import { Chip } from '@/components/Chip'
import { Empty } from '@/components/Empty'
import { IconFeather } from '@/components/IconFeather'
import { Spinner } from '@/components/Spinner'
import { DialogController } from '@/controllers/dialog-controller'
import { PUBLIC_URL } from '@/definitions/constants'
import type { Hit, SearchResponses } from '@algolia/client-search'
import { searchClient as Algolia } from '@algolia/client-search'
import { ICON_F_SEARCH } from '@aracna-icons/feather'
import { concatURL, debounce, getObjectProperty, tcp } from '@aracna/core'
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
import type { StateChangeEvent } from '@aracna/web-components'
import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import './DialogSearch.css'

const algolia = Algolia(import.meta.env.PUBLIC_ALGOLIA_APP_ID, import.meta.env.PUBLIC_ALGOLIA_API_KEY)

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

    debounce(() => search(event.detail?.value), 500, 'ds')
  }

  const onClose = () => {
    DialogController.hide('search')
  }

  const search = async (query: string = '') => {
    let response: SearchResponses<T> | Error

    if (query.length < 3) {
      store.hits = []
      store.searching = false

      return
    }

    response = await tcp(() => algolia.searchForHits<T>([{ indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME }]))
    if (response instanceof Error) return

    store.hits = getObjectProperty(response.results[0], 'hits', [])
    store.searching = false
  }

  useWindowEventListener('keydown', (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault()
      event.stopPropagation()

      DialogController.show('search')
    }
  })

  return useObserver(() =>
    createPortal(
      <AracnaDialog id='search' onDialogClose={onClose} visible={DialogController.isVisible('search')} click-outside-deactivates>
        <AracnaAriaComboBox>
          <AracnaAriaComboBoxGroup>
            <IconFeather src={ICON_F_SEARCH} stroke='white' stroke-width={3} />
            <AracnaAriaComboBoxInput onStateChange={onInputStateChange}>
              <input placeholder='Search' suppressHydrationWarning />
            </AracnaAriaComboBoxInput>
            <Chip layer={1} onClick={onClose} text='ESC' />
          </AracnaAriaComboBoxGroup>
          {store.searching && <Spinner className='self-center my-8 !border-t-0' size={24} stroke='white' />}
          {store.searching === false && (
            <Fragment>
              {store.hits.length <= 0 && (
                <Empty className='px-4 py-8' headline='Search' text={store.query.length >= 3 ? 'No results found.' : 'Type something to start searching!'} />
              )}
              {store.hits.length > 0 && (
                <AracnaAriaComboBoxList>
                  {store.hits.slice(0, 5).map((hit: Hit<T>) => (
                    <a href={concatURL(PUBLIC_URL, hit.slug)} key={hit.objectID}>
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
      </AracnaDialog>,
      document.body
    )
  )
}
