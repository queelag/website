import { joinElementClasses } from '@aracna/web'
import type { MarkdownHeading } from 'astro'
import { useEffect, useMemo, useState } from 'react'

interface Props {
  headings: MarkdownHeading[]
}

export function TOCs(props: Props) {
  const [active, setActive] = useState<string>()
  const headings = useMemo(
    () => [{ depth: 2, slug: '', text: 'Overview' }, ...props.headings.filter((heading: MarkdownHeading) => heading.depth > 1)],
    [props.headings]
  )

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

      setActive(intersecting[0].target.id)
    })

    for (let heading of headings) {
      if (heading.slug.length <= 0) {
        continue
      }

      const element = document.querySelector(`#${heading.slug}`)
      if (!element) continue

      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [headings])

  return (
    <div className='sticky top-24 right-0 min-w-[256px] ml-auto hidden xl:flex flex-col font-medium' style={{ height: 'calc(100vh - 96px)' }}>
      <div className='flex flex-col'>
        <b className='pl-4 py-1 border-l-4 border-transparent'>On this page</b>
        <div className='flex flex-col'>
          {headings.map((heading: MarkdownHeading, index: number) => (
            <a
              className={joinElementClasses(
                'inline-flex py-1 border-l-4',
                'transition hover:border-purple-500',
                heading.slug === active ? 'border-slate-600' : index <= 0 && !active ? 'border-slate-600' : 'border-slate-800'
              )}
              href={'#' + heading.slug}
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
