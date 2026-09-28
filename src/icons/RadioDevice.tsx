import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const RadioDevice: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4m0 8v4" />
    <path d="M2 12h4m8 0h4" />
    <path d="M5.93 5.93l2.83 2.83m5.48 0l2.83-2.83" />
    <path d="M5.93 18.07l2.83-2.83m5.48 0l2.83 2.83" />
  </SVGIcon>
)
