import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const PixIcon: FC<IconProps> = ({ color = 'currentColor', ...props }) => (
  <SVGIcon color={color} fill={color} stroke="none" {...props}>
    <path d="M12 2L6 8L2 12L6 16L12 22L18 16L22 12L18 8L12 2M12 8L8 12L12 16L16 12L12 8Z" />
  </SVGIcon>
)
