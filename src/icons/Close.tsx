import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const CloseIcon: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" />
  </SVGIcon>
)
