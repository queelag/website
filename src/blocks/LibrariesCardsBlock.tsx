import { IconFeatherCpu } from '@aracna/icons-feather-react/components/cpu'
import { IconFeatherFeather } from '@aracna/icons-feather-react/components/feather'
import { IconFeatherGlobe } from '@aracna/icons-feather-react/components/globe'
import { IconFeatherMessageCircle } from '@aracna/icons-feather-react/components/message-circle'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap'
import type { AracnaIconProps } from '@aracna/react-components'
import { IconReact } from 'src/icons/IconReact'
import './LibrariesCardsBlock.css'

const LIBRARIES = [
  {
    name: 'Core',
    description: `The pulsating heart of Aracna.\n\nExposes many classes, functions and utils that will make you write shorter and smarter code.`,
    href: '/core/get-started',
    icon: IconFeatherCpu
  },
  {
    name: 'Web',
    description: `Make the web better and more accessible.\n\nCreate ARIA compliant components with ease and leverage the native Browser APIs in a simpler way.`,
    href: '/web/get-started',
    icon: IconFeatherGlobe
  },
  {
    name: 'React',
    description: 'Leverage the power of Aracna Web Components in a React fashion.\n\nExposes many components, functions and hooks for your daily needs.',
    href: '/react/get-started',
    icon: (props: AracnaIconProps) => <IconReact {...props} fill='white' />
  },
  {
    name: 'State Manager',
    description: `Observe and watch changes in a functional way.\n\nSupports React out of the box with tailor made components, hocs and hooks.`,
    href: '/state-manager/get-started',
    icon: IconFeatherZap
  },
  {
    name: 'Icons',
    description: `Use icons without dealing with the raw assets.\n\nFeather Icons and Material Symbols are available. Small icon packs are exposed as Web and React components.`,
    href: '/icons/get-started',
    icon: IconFeatherFeather
  },
  {
    name: 'FCM',
    description: `Send and receive FCM messages without relying on the Firebase SDK.\n\nWorks only with Node.js.`,
    href: '/fcm/get-started',
    icon: IconFeatherMessageCircle
  }
]

export function LibrariesCardsBlock() {
  return (
    <div className='libraries-cards-block not-prose'>
      {LIBRARIES.map((library) => (
        <a href={library.href} key={library.href}>
          <library.icon size={32} stroke='white' stroke-width={0.75} />
          <div className='flex flex-col gap-1'>
            <span className='text-2xl font-bold text-white'>{library.name}</span>
            <span className='whitespace-pre-wrap text-slate-400'>{library.description}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
