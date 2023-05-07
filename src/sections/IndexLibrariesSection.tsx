import MESH_BLUE from '@/assets/meshes/blue.jpeg'
import MESH_MINT from '@/assets/meshes/mint.jpeg'
import MESH_ROSE from '@/assets/meshes/rose.jpeg'
import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { IconFeatherChevronRight } from '@aracna/icons-feather-react/components/chevron-right.js'
import { IconFeatherCpu } from '@aracna/icons-feather-react/components/cpu.js'
import { IconFeatherGlobe } from '@aracna/icons-feather-react/components/globe.js'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap.js'
import type { IconProps } from '@aracna/react'
import { joinElementClasses } from '@aracna/web'
import { IconReact } from 'src/icons/IconReact.jsx'

const LIBRARIES = [
  {
    name: 'Core',
    description: `The pulsating heart of Aracna.\nExposes many functions, modules and utils that will help you write shorter working code.`,
    href: '/core',
    background: MESH_ROSE,
    icon: IconFeatherCpu,
    hover: 'hover:shadow-rose-300'
  },
  {
    name: 'Web',
    description: `Focused on making the web better and more accessible.\nCreate ARIA compliant components with ease and leverage the native Browser APIs in a simpler way.`,
    href: '/web',
    background: MESH_MINT,
    icon: IconFeatherGlobe,
    hover: 'hover:shadow-mint-300'
  },
  {
    name: 'React',
    description: 'Leverage the power of Aracna Web Components in a React fashion.\nExposes several essential hooks for your daily needs.',
    href: '/react',
    background: MESH_BLUE,
    icon: (props: IconProps) => <IconReact {...props} fill='white' />,
    hover: 'hover:shadow-blue-400'
  },
  {
    name: 'State Manager',
    description: 'Observe and watch changes in a functional way.\nSupports React out of the box with a full toolkit of hooks.',
    href: '/state-manager',
    background: MESH_SEANCE,
    icon: IconFeatherZap,
    hover: 'hover:shadow-seance-400'
  }
]

export function IndexLibrariesSection() {
  return (
    <div className='w-full grid lg:grid-cols-2 gap-6'>
      {LIBRARIES.map((library) => (
        <a
          className={joinElementClasses('flex flex-col rounded-3xl overflow-hidden transition shadow-2xl shadow-slate-800 bg-black', 'hover:shadow-slate-600')}
          href={library.href}
        >
          <div
            className='relative h-48 flex justify-center items-center overflow-hidden bg-black'
            style={{ backgroundImage: `url(${library.background})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
          >
            <library.icon className='z-10' size={48} stroke='white' stroke-width={0.75} />
          </div>
          <div className='flex flex-col p-10 gap-1'>
            <span className='text-2xl'>{library.name}</span>
            <span className='max-w-screen-sm whitespace-pre-wrap text-slate-300'>{library.description}</span>
          </div>
          <div className='flex justify-end pb-10 pr-10 mt-auto'>
            <div className='flex items-center gap-1'>
              <span className='text-xs uppercase'>discover more</span>
              <IconFeatherChevronRight stroke='white' />
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
