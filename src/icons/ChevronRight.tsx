import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const ChevronRight: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <path d="M9 6L15 12L9 18" />
  </SVGIcon>
)
