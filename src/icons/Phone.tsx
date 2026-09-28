import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const Phone: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="19" x2="12" y2="19.01" />
  </SVGIcon>
)
