import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const CheckIcon: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <path d="M5 13.2592L7.58583 15.9568C8.2525 16.6523 8.58583 17 9.00004 17C9.41425 17 9.74759 16.6523 10.4143 15.9568L19 7" />
  </SVGIcon>
)
