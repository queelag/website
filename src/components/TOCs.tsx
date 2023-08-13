import { getLowestNumber } from '@aracna/core'
import { joinElementClasses } from '@aracna/web'
import type { MarkdownHeading } from 'astro'
import { useEffect, useMemo, useState } from 'react'

interface Props {
  headings: MarkdownHeading[]
}

export function TOCs(props: Props) {
  const lowest = useMemo(() => getLowestNumber(props.headings.map((heading: MarkdownHeading) => heading.depth)), [props.headings])
  const [active, setActive] = useState<string>()

  const onClickHeading = (heading: MarkdownHeading) => {
    setActive(heading.slug)
  }

  useEffect(() => {
    setActive(location.hash.replace('#', ''))
  }, [])

  useEffect(() => {
    let observer: IntersectionObserver

    observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      let intersecting

      intersecting = entries
        .filter((entry: IntersectionObserverEntry) => entry.isIntersecting)
        .sort((a: IntersectionObserverEntry, b: IntersectionObserverEntry) => {
          return a.boundingClientRect.y - b.boundingClientRect.y
        })
      if (intersecting.length <= 0) return

      console.log(...intersecting)

      setActive(intersecting[0].target.id)
    })

    for (let heading of props.headings) {
      const element = document.querySelector(`#${heading.slug}`)
      if (!element) continue

      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [props.headings])

  return (
    <div className='sticky top-24 right-0 ml-auto hidden xl:flex flex-col font-medium' style={{ height: 'calc(100vh - 96px)' }}>
      <div className='w-64 flex flex-col'>
        <b className='pl-4 py-1 border-l-4 border-transparent'>On this page</b>
        <div className='flex flex-col'>
          {props.headings.map((heading: MarkdownHeading, index: number) => (
            <a
              className={joinElementClasses(
                'py-1 border-l-4 ',
                'transition hover:border-purple-500',
                heading.slug === active ? 'border-slate-700' : index <= 0 && !active ? 'border-slate-700' : 'border-slate-800'
              )}
              href={'#' + heading.slug}
              key={heading.slug}
              onClick={() => onClickHeading(heading)}
              style={{ paddingLeft: 16 * (heading.depth - lowest + 1) }}
            >
              {heading.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
