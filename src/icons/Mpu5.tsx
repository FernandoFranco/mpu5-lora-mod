import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const Mpu5Icon: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <line x1="9" y1="9" x2="9" y2="4" />
    <line x1="12" y1="9" x2="12" y2="2" />
    <line x1="15" y1="9" x2="15" y2="4" />
    <rect x="7" y="9" width="10" height="13" rx="2" />
  </SVGIcon>
)
