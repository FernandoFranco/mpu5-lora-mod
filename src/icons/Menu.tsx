import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const MenuIcon: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <path d="M10 5L20 5" />
    <path d="M4 12L20 12" />
    <path d="M4 19L14 19" />
  </SVGIcon>
)
