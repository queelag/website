import { removeArrayItems } from '@aracna/core'
import { joinElementClasses } from '@aracna/web'
import type { MarkdownHeading } from 'astro'
import { useEffect, useMemo, useRef, useState } from 'react'

interface Props {
  headings: MarkdownHeading[]
}

export function TOCs(props: Props) {
  const [active, setActive] = useState<string>()
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

  const headings = useMemo(
    () => [{ depth: 2, slug: 'overview', text: 'Overview' }, ...props.headings.filter((heading: MarkdownHeading) => heading.depth > 1)],
    [props.headings]
  )
  const scrollY = useRef<number>(0)

  const onClickHeading = (heading: MarkdownHeading) => {
    setActive(heading.slug)
  }

  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    if (entries.length <= 0) {
      return
    }

    setEntries((es: IntersectionObserverEntry[]) => {
      console.log(
        entries[0].target.id,
        es,
        removeArrayItems(es, () => Boolean(es.find((e: IntersectionObserverEntry) => e.target === entries[0].target)))
      )

      return [...removeArrayItems(es, () => Boolean(es.find((e: IntersectionObserverEntry) => e.target === entries[0].target))), ...entries]
    })
  }

  useEffect(() => {
    setActive(location.hash.replace('#', ''))
  }, [])

  useEffect(() => {
    let observers: IntersectionObserver[] = []

    scrollY.current = window.scrollY

    for (let heading of headings) {
      let element: Element | null, observer: IntersectionObserver

      element = document.querySelector(`#${heading.slug}`)
      if (!element) return

      observer = new IntersectionObserver(onIntersect)
      observers.push(observer)

      observer.observe(element)
    }

    return () => observers.forEach((observer: IntersectionObserver) => observer.disconnect())
  }, [])

  useEffect(() => {
    let intersecting: IntersectionObserverEntry[]

    console.log(entries)

    intersecting = entries
      .slice()
      .filter((entry: IntersectionObserverEntry) => entry.isIntersecting)
      .sort((a: IntersectionObserverEntry, b: IntersectionObserverEntry) =>
        scrollY.current >= window.scrollY ? a.boundingClientRect.y - b.boundingClientRect.y : b.boundingClientRect.y - a.boundingClientRect.y
      )

    if (intersecting[0]) {
      setActive(intersecting[0].target.id)
    }

    scrollY.current = window.scrollY
  }, [entries])

  return (
    <div className='sticky top-24 right-0 min-w-[280px] ml-auto hidden xl:flex flex-col font-medium text-sm' style={{ height: 'calc(100vh - 96px)' }}>
      <div className='flex flex-col'>
        <b className='pl-4 py-1 border-l-4 border-transparent'>On this page</b>
        <div className='flex flex-col'>
          {headings.map((heading: MarkdownHeading, index: number) => (
            <a
              className={joinElementClasses(
                'inline-flex py-1 border-l-4',
                'transition hover:border-blue-500',
                heading.slug === active ? 'border-slate-600' : index <= 0 && !active ? 'border-slate-600' : 'border-slate-800'
              )}
              href={`#${heading.slug}`}
              key={heading.slug}
              onClick={() => onClickHeading(heading)}
              style={{ paddingLeft: 16 * (heading.depth - 1) }}
            >
              {heading.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
