import MESH_BLUE from '@/assets/meshes/blue.jpeg'
import MESH_MINT from '@/assets/meshes/mint.jpeg'
import MESH_ROSE from '@/assets/meshes/rose.jpeg'
import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { IconFeatherCpu } from '@aracna/icons-feather-react/components/cpu.js'
import { IconFeatherGlobe } from '@aracna/icons-feather-react/components/globe.js'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap.js'
import type { IconProps } from '@aracna/react'
import { joinElementClasses } from '@aracna/web'
import { IconReact } from 'src/icons/IconReact'

const LIBRARIES = [
  {
    name: 'Core',
    description: `The pulsating heart of Aracna.\n\nExposes many functions, modules and utils that will help you write shorter working code.`,
    href: '/core/get-started',
    background: MESH_ROSE,
    border: 'border-rose-500',
    icon: IconFeatherCpu,
    hover: 'hover:shadow-rose-300'
  },
  {
    name: 'Web',
    description: `Make the web better and more accessible.\n\nCreate ARIA compliant components with ease and leverage the native Browser APIs in a simpler way.`,
    href: '/web/get-started',
    background: MESH_MINT,
    border: 'border-mint-500',
    icon: IconFeatherGlobe,
    hover: 'hover:shadow-mint-300'
  },
  {
    name: 'React',
    description: 'Leverage the power of Aracna Web Components in a React fashion.\n\nExposes several essential hooks for your daily needs.',
    href: '/react/get-started',
    background: MESH_BLUE,
    border: 'border-blue-500',
    icon: (props: IconProps) => <IconReact {...props} fill='white' />,
    hover: 'hover:shadow-blue-400'
  },
  {
    name: 'State Manager',
    description: 'Observe and watch changes in a functional way.\n\nSupports React out of the box with a full toolkit of hooks.',
    href: '/state-manager/get-started',
    background: MESH_SEANCE,
    border: 'border-seance-500',
    icon: IconFeatherZap,
    hover: 'hover:shadow-seance-400'
  }
]

export function LibrariesCardsBlock() {
  return (
    <div className='max-w-screen-lg w-full grid lg:grid-cols-2 gap-6 mt-12 not-prose'>
      {LIBRARIES.map((library) => (
        <a
          className={joinElementClasses('flex flex-col gap-4 p-6 rounded-3xl overflow-hidden transition border-2 border-slate-800 bg-black')}
          href={library.href}
        >
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