import { removeArrayItems } from '@aracna/core'
import { jec } from '@aracna/web'
import type { MarkdownHeading } from 'astro'
import { useEffect, useMemo, useState } from 'react'

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

  const onClickHeading = (heading: MarkdownHeading) => {
    setActive(heading.slug)
  }

  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    if (entries.length <= 0) {
      return
    }

    setEntries((current: IntersectionObserverEntry[]) => {
      let next: IntersectionObserverEntry[]

      next = removeArrayItems(current, (_, entry: IntersectionObserverEntry) => entries.some((e: IntersectionObserverEntry) => e.target === entry.target))
      next = [...next, ...entries]

      return next
    })
  }

  useEffect(() => {
    setActive(location.hash.replace('#', ''))
  }, [])

  useEffect(() => {
    let observer: IntersectionObserver = new IntersectionObserver(onIntersect)

    for (let heading of headings) {
      let element: HTMLElement | null

      element = document.getElementById(heading.slug)
      if (!element) return

      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let intersecting: IntersectionObserverEntry[]

    intersecting = entries
      .filter((entry: IntersectionObserverEntry) => entry.isIntersecting)
      .sort((a: IntersectionObserverEntry, b: IntersectionObserverEntry) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop)

    if (intersecting[0]) {
      setActive(intersecting[0].target.id)
    }
  }, [entries])

  return (
    <div
      className='sticky top-24 right-0 min-w-[280px] max-w-[280px] ml-auto hidden xl:flex flex-col font-medium text-sm'
      style={{ height: 'calc(100vh - 96px)' }}
    >
      <div className='flex flex-col'>
        <b className='pl-4 py-1 border-l-4 border-transparent'>On this page</b>
        <div className='flex flex-col'>
          {headings.map((heading: MarkdownHeading, index: number) => (
            <a
              className={jec(
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
