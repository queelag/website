import { Interval } from '@aracna/core'
import { InputLink, InputNode, ResponsiveNetwork } from '@nivo/network'
import { useEffect, useState } from 'react'

interface Node extends InputNode {
  color: string
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
    id: 'Core'
  },
  {
    color: '#43e57a',
    id: 'Web'
  },
  {
    color: '#43e57a',
    id: 'Web Components'
  },
  {
    color: '#ffc001',
    id: 'React'
  },
  {
    color: '#ffc001',
    id: 'React Components'
  },
  {
    color: '#b386ff',
    id: 'State Manager'
  },
  {
    color: '#b386ff',
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
      data={data}
      margin={{ top: 0, right: 48, bottom: 0, left: 0 }}
      linkDistance={(link: Link) => link.distance}
      centeringStrength={1}
      repulsivity={0}
      nodeSize={24}
      activeNodeSize={24 + 4}
      linkThickness={2}
      inactiveNodeSize={24 - 4}
      nodeColor={(node: Node) => node.color}
      //   nodeBorderColor={{
      //     from: 'color',
      //     modifiers: [['darker', 0.8]]
      //   }}
      //   nodeBorderWidth={2}
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
