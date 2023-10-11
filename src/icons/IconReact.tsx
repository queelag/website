import type { IconProps } from '@aracna/react'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'

const SRC: string = `<svg viewBox="-11.5 -10.2 23 20.5" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="inherit" fill-opacity="1" stroke="none"/><g stroke="inherit" stroke-width="inherit" fill="none" stroke-opacity="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`

export function IconReact(props: IconProps & { fill?: string; stroke?: string; 'stroke-width'?: number | string }) {
  return <AracnaIcon {...props} fill={props.fill ?? 'black'} src={SRC} stroke={props.stroke ?? 'black'} stroke-width={props['stroke-width'] ?? 1.5} />
}
