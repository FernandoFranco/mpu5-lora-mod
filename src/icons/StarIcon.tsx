import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const StarIcon: FC<IconProps> = props => (
  <SVGIcon strokeWidth="2" {...props}>
    <path d="M12 2l3 8h8l-6.5 5 2.5 8L12 16l-6.5 5 2.5-8L1 10h8z" />
  </SVGIcon>
)
