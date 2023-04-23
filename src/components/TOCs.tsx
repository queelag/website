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

  return (
    <div className='ml-auto hidden xl:flex flex-col p-6 text-sm'>
      <div className='w-64 flex flex-col'>
        <b className='pl-4 py-1 border-l-4 border-transparent'>On this page</b>
        <div className='flex flex-col'>
          {props.headings.map((heading: MarkdownHeading, index: number) => (
            <a
              className={joinElementClasses(
                'py-1 border-l-4',
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
