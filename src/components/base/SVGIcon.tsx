import { FC, ReactNode } from 'react'
import type { IconProps } from '@/types'

interface SVGIconProps extends IconProps {
  viewBox?: string
  children: ReactNode
}

export const SVGIcon: FC<SVGIconProps> = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  children,
  ...props
}) => (
  <svg viewBox={viewBox} width={width} height={height} {...props}>
    {children}
  </svg>
)
