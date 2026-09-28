import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const MeshtasticIcon: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <path d="M4 18L10 10M20 18L14 10L8 18" />
  </SVGIcon>
)
