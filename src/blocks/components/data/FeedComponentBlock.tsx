import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaFeedProps } from '@aracna/react'
import { AracnaFeed, AracnaFeedArticle, AracnaFeedArticleDescription, AracnaFeedArticleLabel } from '@aracna/react-components/components/data/feed'
import { jec, type FeedArticleElementAttributes } from '@aracna/web'
import { Fragment } from 'react'

interface Article extends FeedArticleElementAttributes {}

const ARTICLES: Article[] = [
  {
    headline: 'Coffee May Reduce Risk of Heart Disease',
    text: 'A new study shows that drinking coffee can reduce the risk of heart disease by up to 20%. Researchers found that people who drank at least 3 cups of coffee a day had lower levels of inflammation and a lower risk of developing heart disease.'
  },
  {
    headline: 'New Species of Dinosaur Discovered in Argentina',
    text: 'A team of scientists has discovered a new species of dinosaur in Argentina. The dinosaur, named Llukalkan aliocranianus, had a unique skull structure that allowed it to have a wider range of vision and a stronger bite force than other carnivorous dinosaurs.'
  },
  {
    headline: 'New Solar Panels Can Generate Electricity from Raindrops',
    text: 'A group of researchers has developed a new type of solar panel that can generate electricity from raindrops. The panels are made of a thin film of graphene and can produce up to 1 volt of electricity per square meter of panel.'
  },
  {
    headline: 'Spicy Foods May Lower Risk of Death from Cancer and Heart Disease',
    text: 'A study has found that people who regularly eat spicy foods have a lower risk of death from cancer, heart disease, and respiratory diseases. The study found that capsaicin, the compound that gives chili peppers their heat, has anti-inflammatory and antioxidant properties that may help protect against these diseases.'
  }
]

export function FeedComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'articles', type: 'json' },
        { name: 'busy', type: 'boolean' }
      ]}
      component={(props: AracnaFeedProps) => (
        <AracnaFeed {...props} className='w-full grid grid-cols-2 gap-2'>
          {props.articles?.map((article: Article) => (
            <AracnaFeedArticle
              className={jec('aspect-square flex flex-col gap-2 p-4 rounded transition cursor-pointer border-2', 'border-slate-800 hover:bg-slate-900')}
              key={article.headline}
            >
              {props.busy && (
                <div className='flex flex-col gap-4 animate-pulse'>
                  <div className='grid grid-cols-12 gap-2'>
                    <div className='h-2.5 bg-slate-600 rounded col-span-12'></div>
                    <div className='h-2.5 bg-slate-600 rounded col-span-10'></div>
                    <div className='h-2.5 bg-slate-600 rounded col-span-2'></div>
                  </div>
                  <div className='grid grid-cols-12 gap-2'>
                    <div className='h-2 bg-slate-700 rounded col-span-4'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-8'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-6'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-6'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-8'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-4'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-2'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-10'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-12'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-3'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-9'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-12'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-4'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-8'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-6'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-6'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-8'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-4'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-2'></div>
                    <div className='h-2 bg-slate-700 rounded col-span-10'></div>
                  </div>
                </div>
              )}
              {!props.busy && (
                <Fragment>
                  <AracnaFeedArticleLabel className='text-sm font-medium leading-5 line-clamp-2'>{article.headline}</AracnaFeedArticleLabel>
                  <AracnaFeedArticleDescription className='line-clamp-[8] text-xs text-slate-400'>{article.text}</AracnaFeedArticleDescription>
                </Fragment>
              )}
            </AracnaFeedArticle>
          ))}
        </AracnaFeed>
      )}
      defaultProps={{
        articles: JSON.stringify(ARTICLES) as any
      }}
    />
  )
}
