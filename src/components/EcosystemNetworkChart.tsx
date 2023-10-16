import { Interval } from '@aracna/core'
import { IconFeatherCpu } from '@aracna/icons-feather-react/components/cpu'
import { IconFeatherGlobe } from '@aracna/icons-feather-react/components/globe'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap'
import type { AracnaIconProps } from '@aracna/react'
import { InputLink, InputNode, NodeProps, ResponsiveNetwork } from '@nivo/network'
import { ReactElement, useEffect, useState } from 'react'
import { IconReact } from 'src/icons/IconReact'
import { NivoNetworkNode } from './NivoNetworkNode'

interface Node extends InputNode {
  color: string
  icon?: (props: AracnaIconProps) => ReactElement
}

interface Link extends InputLink {
  distance: number
}

interface Data {
  nodes: Node[]
  links: Link[]
}

const NODES: Node[] = [
  {
    color: '#6296f8',
    icon: (props: AracnaIconProps) => <IconFeatherCpu {...props} />,
    id: 'Core'
  },
  {
    color: '#43e57a',
    icon: (props: AracnaIconProps) => <IconFeatherGlobe {...props} />,
    id: 'Web'
  },
  {
    color: '#43e57a',
    icon: (props: AracnaIconProps) => <IconFeatherGlobe {...props} />,
    id: 'Web Components'
  },
  {
    color: '#ffc001',
    icon: (props: AracnaIconProps) => <IconReact {...props} />,
    id: 'React'
  },
  {
    color: '#ffc001',
    icon: (props: AracnaIconProps) => <IconReact {...props} />,
    id: 'React Components'
  },
  {
    color: '#b386ff',
    icon: (props: AracnaIconProps) => <IconFeatherZap {...props} />,
    id: 'State Manager'
  },
  {
    color: '#b386ff',
    icon: (props: AracnaIconProps) => <IconFeatherZap {...props} />,
    id: 'State Manager React'
  }
]

const LINKS: Link[] = [
  {
    distance: 2,
    source: 'Core',
    target: 'Web'
  },
  {
    distance: 1,
    source: 'Web',
    target: 'Web Components'
  },
  {
    distance: 2,
    source: 'Core',
    target: 'Web Components'
  },
  {
    distance: 1,
    source: 'React',
    target: 'React Components'
  },
  {
    distance: 2,
    source: 'Web',
    target: 'React'
  },
  {
    distance: 2,
    source: 'Core',
    target: 'React'
  },
  {
    distance: 2,
    source: 'Web Components',
    target: 'React Components'
  },
  {
    distance: 2,
    source: 'Web',
    target: 'React Components'
  },
  {
    distance: 2,
    source: 'Core',
    target: 'React Components'
  },
  {
    distance: 1,
    source: 'State Manager',
    target: 'State Manager React'
  },
  {
    distance: 2,
    source: 'Core',
    target: 'State Manager'
  },
  {
    distance: 2,
    source: 'React',
    target: 'State Manager React'
  },
  {
    distance: 2,
    source: 'Web',
    target: 'State Manager React'
  },
  {
    distance: 2,
    source: 'Core',
    target: 'State Manager React'
  }
]

export function EcosystemNetworkChart() {
  const [data, setData] = useState<Data>({
    nodes: [],
    links: []
  })
  const [nodeSize] = useState<number>(32)

  useEffect(() => {
    Interval.start(
      'enc',
      () => {
        setData((data: Data) => ({
          nodes: NODES.filter((node: Node) => LINKS.slice(0, data.links.length + 1).find((link: Link) => [link.source, link.target].includes(node.id))).map(
            (node: Node) => ({ ...node, color: 'white' })
          ),
          links: LINKS.slice(0, data.links.length + 1).map((link: Link) => ({ ...link, distance: link.distance === 2 ? 320 : 64 }))
        }))
      },
      100
    )

    return () => Interval.stop('enc')
  }, [])

  useEffect(() => {
    if (data.links.length === LINKS.length) {
      Interval.stop('enc')
    }
  }, [data])

  return (
    <ResponsiveNetwork
      activeNodeSize={nodeSize}
      centeringStrength={1}
      data={data}
      inactiveNodeSize={nodeSize}
      linkDistance={(link: Link) => link.distance}
      linkThickness={2}
      margin={{ top: 0, right: 48, bottom: 0, left: 0 }}
      nodeSize={nodeSize}
      nodeColor={(node: Node) => node.color}
      nodeComponent={(props: NodeProps<Node>) => (
        <NivoNetworkNode {...props}>{props.node.data.icon && <props.node.data.icon size={nodeSize / 2} />}</NivoNetworkNode>
      )}
      repulsivity={0}
      theme={{
        tooltip: {
          chip: {
            borderRadius: 32
          },
          container: {
            background: 'black'
          }
        }
      }}
    />
  )
}
