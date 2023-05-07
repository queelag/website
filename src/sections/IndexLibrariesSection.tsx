import MESH_BLUE from '@/assets/meshes/blue.jpeg'
import MESH_MINT from '@/assets/meshes/mint.jpeg'
import MESH_ROSE from '@/assets/meshes/rose.jpeg'
import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { IconFeatherCpu } from '@aracna/icons-feather-react/components/cpu.js'
import { IconFeatherGlobe } from '@aracna/icons-feather-react/components/globe.js'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap.js'
import { IconReact } from 'src/icons/IconReact.jsx'

const LIBRARIES = [
  {
    name: 'Core',
    description:
      'The pulsating heart of Aracna. It branches out to the other libraries, contains many functions, modules and utils that will help you write shorter working code.',
    href: '/core',
    background: MESH_ROSE,
    icon: IconFeatherCpu
  },
  {
    name: 'Web',
    description: `Focused on making the web better and more accessible. Create ARIA compliant components with ease and leverage the native Browser APIs in a simpler way.`,
    href: '/web',
    background: MESH_MINT,
    icon: IconFeatherGlobe
  },
  {
    name: 'React',
    description: 'Lorem ipsum',
    href: '/react',
    background: MESH_BLUE,
    icon: IconReact
  },
  {
    name: 'State Manager',
    description: 'Lorem ipsum',
    href: '/state-manager',
    background: MESH_SEANCE,
    icon: IconFeatherZap
  }
]

export function IndexLibrariesSection() {
  return (
    <div className='grid lg:grid-cols-2 gap-6'>
      {LIBRARIES.map((library) => (
        <a className='flex flex-col rounded-3xl overflow-hidden transition shadow-2xl hover:scale-105 shadow-slate-800 bg-black' href={library.href}>
          <div className='h-48 flex justify-center items-center' style={{ background: `url(${library.background}) center` }}>
            <library.icon size={32} stroke='white' stroke-width={1} />
          </div>
          <div className='flex flex-col p-10 gap-1'>
            <span className='text-2xl'>{library.name}</span>
            <span className='max-w-screen-sm text-slate-300'>{library.description}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
