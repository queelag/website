import type { InputNode, NodeProps } from '@nivo/network'
import { animated, to } from '@react-spring/web'
import { memo, type ReactNode } from 'react'

interface Props<Node extends InputNode> extends NodeProps<Node> {
  children?: ReactNode
}

const NonMemoizedNetworkNode = <Node extends InputNode>({
  node,
  animated: animatedProps,
  onClick,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  children
}: Props<Node>) => (
  <animated.foreignObject
    data-testid={`node.${node.id}`}
    transform={to([animatedProps.x, animatedProps.y, animatedProps.scale, animatedProps.size], (x, y, scale, size) => {
      return `translate(${x - size / 2},${y - size / 2}) scale(${scale})`
    })}
    width={animatedProps.size}
    height={animatedProps.size}
    opacity={animatedProps.opacity}
    onClick={onClick ? (event) => onClick(node, event) : undefined}
    onMouseEnter={onMouseEnter ? (event) => onMouseEnter(node, event) : undefined}
    onMouseMove={onMouseMove ? (event) => onMouseMove(node, event) : undefined}
    onMouseLeave={onMouseLeave ? (event) => onMouseLeave(node, event) : undefined}
  >
    <animated.div
      className='w-full h-full rounded-full flex justify-center items-center'
      style={{
        background: animatedProps.color,
        border: `${animatedProps.borderWidth}px solid ${animatedProps.borderColor}`
      }}
    >
      {children}
    </animated.div>
  </animated.foreignObject>
)

export const NivoNetworkNode = memo(NonMemoizedNetworkNode) as typeof NonMemoizedNetworkNode
